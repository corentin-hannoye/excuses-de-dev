import React from "react";
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
import { create, findOneHttpCodeByCode, findOneTagByLibelle } from "../../Services/API/API";

export default function({ successCallback = null }) {
    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        mode: "onTouched"
    });

    const onSubmit = async (data: any) => {

        const httpCodeValue = parseInt(data.http_code);
        const TagValue = data.tag;
        const messageValue = data.message;

        // Vérification de l'existance d'un code http ayant le même code soumis dans le formulaire, si non alors une création sera faite
        let httpCode = await findOneHttpCodeByCode(httpCodeValue);
        if(!httpCode) {
            httpCode = await create("http_codes", {code: httpCodeValue});
        }
        const urlHttpCode = httpCode["@id"];

        if(urlHttpCode) {

            // ...
            let tag = await findOneTagByLibelle(TagValue);
            if(!tag) {
                tag = await create("tags", {libelle: TagValue});
            }
            const urlTag = tag["@id"];

            if(urlTag) {

                // Création de l'excuse dans la base données
                create("apologies", {http_code: urlHttpCode, tag: urlTag, message: messageValue});

                // Message d'information à l'utilisateur
                toast.success("Excuse ajoutée avec succès");

                // Réinitialisation du formulaire
                reset();
                (successCallback && successCallback());

            }

        }

    };

    // Rendu du formulaire
    return <form method="POST" onSubmit={handleSubmit(onSubmit)}>
        <div className="mb_40">
            <p>Le formulaire d'ajout d'une excuse est en saisie libre, veillez à saisir des données correctes</p>
        </div>
        <div className="mb_20">
            <label>
                <p className="label">Code HTTP</p>
                <input className={(errors.http_code ? "error" : "")} type="text" {...register("http_code", {
                    required: "Veuillez saisir un code HTTP valide",
                    pattern: {
                        value: /^\d{3}$/,
                        message: "Le code HTTP est composé de 3 numéros"
                    }
                })} />
                { errors.http_code && <p className="error">{errors.http_code.message}</p> }
            </label>
        </div>
        <div className="mb_20">
            <label>
                <p className="label">Tag</p>
                <input className={(errors.tag ? "error" : "")} type="text" {...register("tag", {
                    required: "Veuillez saisir un tag valide"
                })} />
                { errors.tag && <p className="error">{errors.tag.message}</p> }
            </label>
        </div>
        <div className="mb_20">
            <label>
                <p className="label">Message</p>
                <textarea className={(errors.message ? "error" : "")} rows="3" {...register("message", {
                    required: "Veuillez saisir un message valide"
                })} />
                { errors.message && <p className="error">{errors.message.message}</p> }
            </label>
        </div>
        <div>
            <button className="app_btn">Ajouter</button>
        </div>
    </form>;
}

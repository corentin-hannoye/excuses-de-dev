import React from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { toast } from 'react-toastify';

export default function() {
    const { register, handleSubmit, formState: { errors, isSubmitSuccessful }} = useForm({
        mode: "onTouched"
    });

    const onSubmit = (data: SubmitHandler<FieldValues>) => {

        toast("Excuse ajoutée avec succès");
        

    };

    return <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb_40">
            <p>Le formulaire d'ajout d'une excuse est en saisie libre, veillez à saisir des données correctes</p>
        </div>
        <div className="mb_20">
            <label>
                <p>Code HTTP</p>
                <input type="text" {...register("http_code", {
                    required: "Veuillez saisir un code HTTP valide",
                    pattern: {
                        value: /^\d{3}$/,
                        message: "Le code HTTP est composé de 3 numéros"
                    }
                })} />
                {errors.http_code && <p>{errors.http_code.message}</p>}
            </label>
        </div>
        <div className="mb_20">
            <label>
                <p>Tag</p>
                <input type="text" {...register("tag", {
                    required: "Veuillez saisir un tag valide"
                })} />
                {errors.tag && <p>{errors.tag.message}</p>}
            </label>
        </div>
        <div className="mb_20">
            <label>
                <p>Message</p>
                <textarea rows="3" {...register("message", {
                    required: "Veuillez saisir un message valide"
                })} />
                {errors.message && <p>{errors.message.message}</p>}
            </label>
        </div>
        <div>
            <button>Ajouter</button>
        </div>
    </form>;
}

import React from "react";
import { useForm } from "react-hook-form";

export default function() {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => console.log(errors); 

    return <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb_40">
            <p>Le formulaire d'ajout d'une excuse est en saisie libre, veillez à saisir des données correctes</p>
        </div>
        <div className="mb_20">
            <label>
                <p>Code HTTP</p>
                <input type="text" {...register("http_code", {
                    required: true
                })} />
            </label>
        </div>
        <div className="mb_20">
            <label>
                <p>Tag</p>
                <input type="text" {...register("tag", {
                    required: true
                })} />
            </label>
        </div>
        <div className="mb_20">
            <label>
                <p>Message</p>
                <input type="text" {...register("message", {
                    required: true
                })} />
            </label>
        </div>
        <div>
            <button>Ajouter</button>
        </div>
    </form>;
}

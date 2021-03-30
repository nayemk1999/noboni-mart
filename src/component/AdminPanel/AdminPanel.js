import React from 'react';
import { useForm } from "react-hook-form";

const AdminPanel = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input name="name" defaultValue="test" ref={register({ required: true })} />
            <input name="image" type="file" />
            <input type="submit" />
        </form>
    );
};

export default AdminPanel;
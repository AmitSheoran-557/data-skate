"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import Swal from 'sweetalert2'

type FormData = {
    firstName: string;
    secondName: string;
    email: string;
};

const WelcomeForm: React.FC = () => {
    const router = useRouter();
    const initialFormData = {
        firstName: "",
        secondName: "",
        email: "",
    };

    const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
    const [formData, setFormData] = useState<FormData>(initialFormData);

    const EmailRegex =
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    const onSubmit: SubmitHandler<FormData> = (data: FormData) => {
        setFormData(data);
        localStorage.setItem("formData", JSON.stringify(data));
        localStorage.setItem("isLogin", "true");
        router.push("/file-upload");

        Swal.fire({
            title: "Good job!",
            text: "You Form is SuccessFully submitted",
            icon: "success",
            confirmButtonText: 'Done'
        });
    };

    useEffect(() => {
        if (localStorage.getItem("isLogin") === "true") {
            router.push("/file-upload");
        }
    }, [router]);

    return (
        <div className="py-20 flex flex-col relative justify-center items-center">
            <h1 className="xl:text-5xl lg:text-4xl text-3xl text-center font-bold">
                Welcome To Data <span className="text-red">skate</span>
            </h1>
            <form onSubmit={handleSubmit(onSubmit)} className="p-6 rounded-lg w-full max-w-sm" noValidate>
                <div className="mb-4">
                    <p className="text-black/70 font-medium lg:text-base text-sm lg:mb-1.5 mb-1">
                        First Name
                    </p>
                    <input {...register("firstName", { required: "Please enter your first name" })} type="text" id="firstName" placeholder="Enter your first name"
                        className="border rounded w-full py-2 px-3 text-gray-700" />
                    {errors.firstName && (
                        <p className="text-red-600 font-bold max-sm:text-sm pt-1 pl-2">
                            {errors.firstName.message}
                        </p>
                    )}
                </div>
                <div className="mb-4">
                    <p className="text-black/70 font-medium lg:text-base text-sm lg:mb-1.5 mb-1"> Second Name</p>
                    <input {...register("secondName", { required: "Please enter your second name" })} type="text" id="secondName" placeholder="Enter your second name"
                        className="border rounded w-full py-2 px-3 text-gray-700" />
                    {errors.secondName && (
                        <p className="text-red-600 font-bold max-sm:text-sm pt-1 pl-2">
                            {errors.secondName.message}
                        </p>
                    )}
                </div>
                <div className="mb-4">
                    <p className="text-black/70 font-medium lg:text-base text-sm lg:mb-1.5 mb-1"> Email</p>
                    <input {...register("email", { required: "Please enter your email address", pattern: { value: EmailRegex, message: "Please enter a valid email address", }, })}
                        className="border rounded w-full py-2 px-3 text-gray-700"
                        type="email" id="email" placeholder="Enter your email" />
                    {errors.email && (
                        <p className="text-red-600 font-bold max-sm:text-sm pt-1 pl-2">
                            {errors.email.message}
                        </p>
                    )}
                </div>
                <button type="submit" className="w-full bg-blue-500 cursor-pointer text-white font-bold lg:mt-2 mt-1 py-2 px-4 rounded focus:outline-none focus:shadow-outline hover:bg-blue-700"> Submit </button>
            </form>
        </div>
    );
};

export default WelcomeForm;

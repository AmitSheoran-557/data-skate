"use client";
import Header from '@/components/common/Header';
import ProcessFiles from '@/components/ProcessFiles'
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react'

const page = () => {
    const router = useRouter();
    useEffect(() => {
        if (localStorage.getItem("isLogin") !== "true") {
            router.push("/");
        }
    }, []);

    return (
        <>
            <Header />
            <ProcessFiles />
        </>
    )
}

export default page

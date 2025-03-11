"use client";
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
        <ProcessFiles />
    )
}

export default page

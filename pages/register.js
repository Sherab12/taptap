import Head from "next/head"
import Layout from "./layout/layout"
import Link from "next/link"
import styles from '../styles/Form.module.css';
import Image from "next/image";
import {signIn, signOut } from "next-auth/react"
import { useFormik } from "formik";
import { registerValidate } from "./lib/validate";
import { useRouter } from "next/router";
import styled from "styled-components";


const Mar = styled.title`
    display: flex;
    font-weight: bold;
    justify-content: center;
    font-size: xx-large;
`;

export default function Register(){

    const router = useRouter();

    const formik = useFormik({
        initialValues:{
            username:'',
            email:'',
            password:'',
            cpassword:''
        },

        validate: registerValidate,

        onSubmit
    })

    async function onSubmit(values){
        const options = {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(values)
        }

        await fetch('http://localhost:3000/api/auth/signup', options)
            .then(res => res.json())
            .then((data) => {
                if(data) router.push('http://localhost:3000')
            })

    }

    return(
        <Layout>

            <section className="w-3/4 mx-auto flex-col gap-10">
                <div className="title">
                <Mar >Register</Mar>
                <p className="w-3/4 mx-auto text-gray-600 py-2"></p>
                </div>
                {/*form */}
                <form className="flex flex-col gap-5" onSubmit={formik.handleSubmit}>
                <div className={`${styles.input_group} ${formik.errors.username && formik.touched.username? 'border-rose-600': ' '}`}>
                        <input type="text" 
                        name="Username" 
                        placeholder="Username"  
                        className={styles.input_text}
                        {...formik.getFieldProps('username')}
                        />
                    </div>
                    
                    
                    <div className={`${styles.input_group} ${formik.errors.email && formik.touched.email? 'border-rose-600': ' '}`}>
                        <input type="email" 
                        name="email" 
                        placeholder="Email"  
                        className={styles.input_text}
                        {...formik.getFieldProps('email')}
                        />
                    </div>
                    
                    <div className={`${styles.input_group} ${formik.errors.password && formik.touched.password? 'border-rose-600': ' '}`}>
                        <input type="password" 
                        name="password" 
                        placeholder="Password"  
                        className={styles.input_text}
                        {...formik.getFieldProps('password')}
                        />
                    </div>
                    
                    <div className={`${styles.input_group} ${formik.errors.cpassword && formik.touched.cpassword? 'border-rose-600': ' '}`}>
                        <input type="password" 
                        name="cpassword" 
                        placeholder="Confirm Password"  
                        className={styles.input_text}
                        {...formik.getFieldProps('cpassword')}
                        />
                    </div>
                    {/*{formik.errors.cpassword && formik.touched.cpassword?<span className="text-rose-500">{formik.errors.cpassword}</span>:<></>}
                    */}
                    
                    {/*login buttons*/ }
                    <div className="input-button">
                        <button type="submit" 
                        className={styles.button}>
                            Sign Up
                        </button>
                    </div>

                </form>

                {/*bottom*/}
                <p className="text-center text-gray-400 py-2">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    Already have an account?<Link legacyBehavior href={'/login'}><a className="text-blue-700"> <br /> <center>Sign In</center></a></Link>
                </p>

            </section>
        
        </Layout>  
    )
}
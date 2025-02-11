import Head from "next/head"
import Layout from "./layout/layout"
import Link from "next/link"
import styles from '../styles/Form.module.css';
import {signIn, signOut } from "next-auth/react"
import { useFormik } from "formik";
import login_validate from "./lib/validate";
import connectMongo from "@/database/conn";
import { useRouter } from "next/router";

export default function Login(){

    const router = useRouter()

    const formik = useFormik({
        initialValues: {
            email:'',
            password:''
        },
        validate:login_validate,
        onSubmit
    })

    /*username - yangdon
    password - yangdon123
    */ 
    

    async function onSubmit(values){
        const status = await signIn('credentials', {
            redirect:false,
            email: values.email,
            password: values.password,
            callbackUrl: "http://localhost:3000"
        })

        if(status.ok) router.push(status.url)
    }

    //Google Handler Function
    async function handleGoogleSignin(){
        signIn('google', {callbackUrl: "http://localhost:3000"})
    }

    return(
        <Layout>
            <Head>
                <title>Login</title>
            </Head>

            <section className="w-3/4 mx-auto flex flex-col gap-10">
                <center><div className="title">
                <h1 className="text-black-800 text-4xl font-bold py-4">Welcome</h1>
                <p className="w-3/4 mx-auto text-gray-600">Unlock the Secrets of Bhutanese <br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Tradition with Gyencha</p>
                </div></center>
                
                {/*form */}
                <form className="flex flex-col gap-5" onSubmit={formik.handleSubmit}>
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
                    
                    {/*login buttons*/ }
                    <div className="input-button">
                        <button type="submit" className={styles.button}>
                            Login
                        </button>
                        <button type="button" onClick={handleGoogleSignin} className={styles.button}>
                            Sign In with Google
                        </button>
                    </div>

                </form>

                {/*bottom*/}
                <p className="text-center text-gray-400">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    Dont have an account yet?<Link legacyBehavior href={'/register'}><a className="text-blue-700"> <br /> 
                    <center>Sign Up</center></a></Link>
                </p>

            </section>
        </Layout>
    )
}
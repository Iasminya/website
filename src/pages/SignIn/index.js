import React, { useState } from 'react'
import { withRouter, Link } from 'react-router-dom'
import Header from '../../components/Header'

const SignIn = ({ history }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [disabled, setDisabled] = useState(false)

    const handleSignIn = async (e) => {
        e.preventDefault()
        if (!email || !password) {
            setError('Preencha e-mail e senha para continuar!')
        } else {
            history.push('/nome')
        }
    }

    return (
        <div className="flex items-center justify-center min-h-[93vh]">
            <div className="flex flex-col items-center w-400 py-3 px-3">
                <Header
                    heading="Entre em sua conta"
                    paragraph="Não tem uma conta?"
                    linkName="Cadastre-se"
                    linkUrl="/cadastro"
                />
                <form onSubmit={handleSignIn} className="w-[350px]">
                    {error && (
                        <div className="pb-4">
                            <div
                                role="alert"
                                className="alert alert-error col-span-full"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="stroke-current shrink-0 h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                </svg>
                                <span>{error}</span>
                            </div>
                        </div>
                    )}
                    <div className="pb-4">
                        <label className="input input-bordered flex items-center gap-2 w-full">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 16 16"
                                fill="currentColor"
                                className="w-4 h-4 opacity-70"
                            >
                                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                            </svg>
                            <input
                                type="email"
                                placeholder="Endereço de e-mail"
                                className="grow"
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </label>
                    </div>
                    <div className="pb-4">
                        <label className="input input-bordered flex items-center gap-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 16 16"
                                fill="currentColor"
                                className="w-4 h-4 opacity-70"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            <input
                                type="password"
                                placeholder="Senha"
                                className="grow"
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </label>
                    </div>
                    <button
                        type="submit"
                        className="btn btn-primary w-full"
                        disabled={disabled}
                    >
                        {disabled && (
                            <span className="loading loading-spinner"></span>
                        )}
                        Login
                    </button>
                </form>
                <hr className="pb-3" />
                <Link
                    className="link link-error w-full text-center"
                    to="/request-mudar-senha"
                >
                    Esqueci a senha
                </Link>
            </div>
        </div>
    )
}

export default withRouter(SignIn)

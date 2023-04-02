/*========================================
        Import Dependencies
========================================*/
import React, { FC, FormEvent, useRef, useState } from 'react'

import { Icon } from '@iconify/react';
import { ButtonOne } from "../ui/Buttons";
import { GetQuoteForm } from "../../interfaces";

interface GetQuoteProps {
    closeLightBox: () => void
    handleSubmitEmail: (contactInfo: GetQuoteForm | null) => void
}


export const GetQuote: FC<GetQuoteProps> = (props: GetQuoteProps) => {
    const { closeLightBox, handleSubmitEmail } = props

    const refName = useRef<HTMLInputElement>(null)
    const refEmail = useRef<HTMLInputElement>(null)
    const refMessage = useRef<HTMLTextAreaElement>(null)

    const [formSubmitted, setFormSubmitted] = useState<boolean>(false)

    const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const contactObj: GetQuoteForm = {
            name: refName.current?.value || null,
            email: refEmail.current?.value || null,
            message: refMessage.current?.value || null,
        }
        // console.log(contactObj)
        handleSubmitEmail(contactObj)
        setFormSubmitted(true)

    }
    const handleOkayClick = () => { closeLightBox() }

    return (
        <div className="lightBox-outer">
            <div className="lightBox-inner" >
                {formSubmitted ?
                    <>
                        <h1 className="thankyou-text">Thank you for reaching out!</h1>
                        <br />
                        <h1>We will get back to you as soon as possible</h1>
                        <ButtonOne text={"Okay"} onClick={handleOkayClick} classes={"confirm-thankyou-btn"} />
                    </>
                    :
                    <form onSubmit={handleFormSubmit} >
                        <Icon onClick={closeLightBox} className="lightBox-close-btn" icon="ic:round-close" />
                        <h1>Get Quote</h1>

                        <label className="lightBox-input-label" >Name</label>
                        <input required ref={refName} className="lightBox-input" name="" type="text" />
                        <label className="lightBox-input-label" >Email</label>
                        <input required ref={refEmail} className="lightBox-input" name="" type="email" />
                        <label className="lightBox-input-label" >How can we help you?</label>
                        <textarea required ref={refMessage} className="lightBox-input" name="" cols={30} rows={10}></textarea>
                        <ButtonOne
                            onClick={() => null}
                            text="Send"
                            classes="lightBox-submit-btn" />
                    </form>
                }
            </div>
        </div>
    )
}
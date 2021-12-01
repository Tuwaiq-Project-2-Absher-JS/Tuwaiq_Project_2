import React from 'react'
import { Image } from 'react-bootstrap'
import footer from '../img/footer.png'
export default function Footer() {
    return (
        <div>
            <Image style={{marginTop:"40px"}} src={footer} fluid />
        </div>
    )
}

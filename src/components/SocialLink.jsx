import React,{ Fragment} from 'react'
import { FaGithub , FaLinkedin } from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'

const SocialLink = () => {

    const links = [
        {
            id:1,
            child: (
                <>
                    LinkedIn <FaLinkedin size={30} />
                </>

            ),
            href:'https://www.linkedin.com/in/saketh-reddy-ab1a04210/',
            style: 'rounded-tr-md',
        },
        {
            id:2,
            child:(
                <>
                    GitHub <FaGithub size={30}></FaGithub>
                </>

            ),
            href:"https://github.com/sakethreddy18",
        },
        {
            id:3,
            child:(
                <>
                    Mail <HiOutlineMail size={30}></HiOutlineMail>
                </>

            ),
            href:"mailto:gsakethreddy18@gmail.com",
        },
        {
            id:4,
            child:(
                <>
                    Resume <BsFillPersonLinesFill size={30}></BsFillPersonLinesFill>
                </>

            ),
            href:"/g_saketh_reddy_resume_2023.pdf",
            style: 'rounded-br-md',
            download:true,
        },
    ]


  return (
    <div className='hidden lg:flex flex-col top-[35%] left-0 fixed'>
        <ul>

            {links.map((link , index) => (
                // eslint-disable-next-line no-useless-concat
                <li key = {index} className={"flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500" + " " + link.style}>
                        <a href={link.href} 
                        className="flex justify-between items-center 
                        w-full text-white"
                        download={link.download}
                        target='_blank' rel="noreferrer">
                            {link.child}
                        </a>
                </li>

            ))}



            
        </ul>
    </div>
  )
}

export default SocialLink
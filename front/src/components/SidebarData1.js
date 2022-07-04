import React from 'react';
import * as ImIcons from "react-icons/im";
import * as BiIcons from "react-icons/bi";
// import * as BsIcons from "react-icons/bs";
// import * as RiIcons from "react-icons/ri";
// import * as AiIcons from "react-icons/ai";



export const SidebarData1 = [
//   {
//     title: 'Profil doctor',
//     path: '/doctor',
//     icon: <ImIcons.ImProfile />,
//     cName: 'nav-text'
//   },
//   {
//     title: 'Creare cont',
//     path: '/register',
//     icon: <RiIcons.RiAccountPinCircleFill />,
//     cName: 'nav-text'
//   },
//   {
//     title: 'Grafice',
//     path: '/chart',
//     icon: <AiIcons.AiOutlineBarChart />,
//     cName: 'nav-text'
//   },
  {
    title: 'Profil pacient',
    path: '/patient',
    icon: <ImIcons.ImProfile />,
    cName: 'nav-text'
  },
//   {
//     title: 'Arhiva',
//     path: '/records',
//     icon: <BsIcons.BsArchive />,
//     cName: 'nav-text'
//   },
  {
    title: 'Deconectare',
    path: '/',
    icon: <BiIcons.BiLogOut />,
    cName: 'nav-text'
  },
];
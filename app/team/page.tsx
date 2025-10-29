'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';

const teamData = {
  2025: [
    {
      name: 'Himanshu Kumar',
      position: 'Captain/Lead Engineer - Manufacturing',
      image: '/images/SUPRA2025-placeholder.jpg',
    },
    {
      name: 'Aryan Nair',
      position: 'Vice Captain/Lead Engineer - Composites/Manufacturing Engineer',
      image: '/images/SUPRA2025-placeholder.jpg'
    },
    {
      name: 'Shashank Reddy',
      position: 'Technical Director/Lead Engineer - Powertrain/Manufacturing Engineer ',
      image: '/images/SUPRA2025-placeholder.jpg'
    },
    {
      name: 'Rohith Ramesh',
      position: 'Project Manager/Lead Engineer - Chasis/Manufacturing Engineer',
      image: '/images/SUPRA2025-placeholder.jpg'
    },
    {
      name: 'Yajna Prasanth K S',
      position: 'Lead Engineer - Drivetrain/Manufacturing Engineer',
      image: '/images/SUPRA2025-placeholder.jpg'
    },
    {
      name: 'Vaikunth M S',
      position: 'Lead Engineer - Aerodynamics,Simulation/Suspension Senior Engineer/Public Relation',
      image: '/images/SUPRA2025-placeholder.jpg'
    },
    {
      name: 'Vedeshwar R',
      position: 'Lead Engineer - Design/Chasis & Simulation Engineer/Team Recruitment & Recruit Manager',
      image: '/images/SUPRA2025-placeholder.jpg'
    },
    {
      name: 'Shivang Nayyar',
      position: 'Lead Engineer - Intake',
      image: '/images/SUPRA2025-placeholder.jpg'
    },
    {
      name: 'Riju Saha',
      position: 'Lead Engineer - Media/Finance',
      image: '/images/SUPRA2025-placeholder.jpg'
    },
    {
      name: 'Krishang Srivastava',
      position: 'Lead Engineer - Paddock/Aerodynamics & Brakes Engineer',
      image: '/images/SUPRA2025-placeholder.jpg'
    },
    {
      name: 'Arunava Mandal',
      position: 'Lead Engineer - Suspension/Steering, Wheel & Tyres Engineer',
      image: '/images/SUPRA2025-placeholder.jpg'
    },
    {
      name: 'Jahnvi Singh',
      position: 'Lead Engineer - tyres/Steering & Wheel Engineer',
      image: '/images/SUPRA2025-placeholder.jpg'
    },
    {
      name: 'Kushal Pudel',
      position: 'Lead Engineer - Electrical',
      image: '/images/SUPRA2025-placeholder.jpg'
    },
    {
      name: 'Devara Nagaraju Naidu',
      position: 'Lead Engineer - Brakes/Composites Engineer',
      image: '/images/SUPRA2025-placeholder.jpg'
    },
    {
      name: 'Nishanth Vydula',
      position: ':ead Engineer - Steering/Wheel, Tyres & Suspension Engineer',
      image: '/images/SUPRA2025-placeholder.jpg'
    },
    {
      name: 'Shouryaman Manhas',
      position: 'Lead Engineer - Exhaust',
      image: '/images/SUPRA2025-placeholder.jpg'
    },
    {
      name: 'Srishti Kumari',
      position: 'Lead - Corporate',
      image: '/images/SUPRA2025-placeholder.jpg'
    },
    {
     name: 'Alan Griffin',
     position: 'Chassis & Simulation Engineer',
     image: '/images/SUPRA2025-placeholder.jpg' 
    },
    {
      name: 'Darsh Pitalia',
      position: 'Drivetrain Engineer',
      image: '/images/SUPRA2025-placeholder.jpg'
    },
    {
      name: 'Eniyavan K',
      position: 'Chassis & Suspension Engineer',
      image: '/images/SUPRA2025-placeholder.jpg'
    },
    {
      name: 'Francis Solomon',
      position: 'Powertrain & Electrical Engineer',
      image: '/images/SUPRA2025-placeholder.jpg'
    },
    {
      name: 'Hamza S',
      position: 'Brakes Engineer/Corporate',
      image: '/images/SUPRA2025-placeholder.jpg'
    },
    {
      name: 'TM Sakthiprasad',
      position: 'Composities & Brakes Engineer',
      image: '/images/SUPRA2025-placeholder.jpg'
    },
    {
      name: 'Varun Jalanmanchili',
      position: 'Aerodynamics Engineer',
      image: '/images/SUPRA2025-placeholder.jpg'
    },
    {
      name: 'Yuvraj Jariwala',
      position: 'Team Design & Simulation Engineer',
      image: '/images/SUPRA2025-placeholder.jpg'
    },
    {
      name: 'Jeryl Jeeva',
      position: 'Intake & Exhaust Engineer',
      image: '/images/SUPRA2025-placeholder.jpg'
    }
  ],
  2021: [
    {
      name: 'Kshitij Singh',
      position: 'Captain/Chassis Lead',
      image: '/images/team/2021/kshitij.png',
    },
    {
      name: 'Subodh Dangi',
      position: 'Project Manager/Suspension Lead',
      image: '/images/team/2021/subodh.png',
    },
    {
      name: 'Shashwat Geel',
      position: 'Technical Lead - Vehicle Dynamics/Steering Lead',
      image: '/images/team/2021/shashwat.png',
    },
    {
      name: 'Saliq Shamim Shah',
      position: 'Technical Lead - Powertrain/Intake and Electronics Lead',
      image: '/images/team/2021/saliq.png',
    },
    {
      name: 'Suresh Kumar',
      position: 'Manufacturing, R&D, Testing Lead/Brakes Lead',
      image: '/images/team/2021/suresh.png',
    },
    {
      name: 'Bishal Sikdar',
      position: 'Corporate and Finance Manager',
      image: '/images/team/2021/bishal.png',
    },
    {
      name: 'Sudha Sindhuja Nayani',
      position: 'Corporate and Media Lead',
      image: '/images/team/2021/sudha.png',
    },
    {
      name: 'Rasesh Lagdev',
      position: 'Composites Engineer',
      image: '/images/team/2021/rasesh.png',
    },
    {
      name: 'Abraham K Mathew',
      position: 'Intake System Engineer',
      image: '/images/team/2021/abraham.png',
    },
    {
      name: 'Hariesh Sekar',
      position: 'Electrical and Electronics Engineer',
      image: '/images/team/2021/hariesh.png',
    },
    {
      name: 'Pranjal Saxena',
      position: 'Drivetrain Engineer',
      image: '/images/team/2021/pranjal.png',
    },
    {
      name: 'Jayaditya Reddy J',
      position: 'Steering Engineer',
      image: '/images/team/2021/jayaditya.png',
    },
    {
      name: 'Sidharth V Menon',
      position: 'Corporate Executive',
      image: '/images/team/2021/sidharth.png',
    },
    {
      name: 'Nitinshan Fredrick W',
      position: 'Vehicle Dynamics Engineer',
      image: '/images/team/2021/nitinshan.png',
    },
  ],
  2020: [
    {
      name: 'Gautam Kavuri',
      position: 'Team Captain',
      image: '/images/team/2020/gautam kavuri.jpg',
    },
    {
      name: 'Abhinav Roy',
      position: 'Project Manager/ Electrical Lead',
      image: '/images/team/2020/abhinav roy.jpg',
    },
    {
      name: 'Aparajito Ganguly',
      position: 'Corporate Lead',
      image: '/images/team/2020/aparajito ganguly.jpg',
    },
    {
      name: 'Yohann Bhumgara',
      position: 'R&D and Testing Lead',
      image: '/images/team/2020/yohann bhumgara.jpg',
    },
    {
      name: 'Sourav Pattnaik',
      position: 'Technical Director',
      image: '/images/team/2020/sourav pattnaik.jpg',
    },
    {
      name: 'Ambarish Pradeep',
      position: 'Aerodynamics Lead',
      image: '/images/team/2020/ambarish pradeep.jpg',
    },
    {
      name: 'Harshmeet Singh',
      position: 'Manufacturing Lead',
      image: '/images/team/2020/harshmeet singh.jpg',
    },
    {
      name: 'Harvinder Singh',
      position: 'Finance Director',
      image: '/images/team/2020/harvinder singh.jpg',
    },
    {
      name: 'Kshitij Singh',
      position: 'Vehicle Dynamicist - Chassis',
      image: '/images/team/2020/kshitij singh.jpg',
    },
    {
      name: 'Shashwat Geel',
      position: 'Vehicle Dynamicist - Steering',
      image: '/images/team/2020/shashwat geel.jpg',
    },
    {
      name: 'Subodh Dangi',
      position: 'Vehicle Dynamicist - Suspension',
      image: '/images/team/2020/subodh dangi.jpg',
    },
    {
      name: 'Suresh Kumar',
      position: 'Vehicle Dynamicist - Brakes',
      image: '/images/team/2020/suresh kumar.jpg',
    },
    {
      name: 'Saliq Shamim Shah',
      position: 'Powertrain Engineer - Intake',
      image: '/images/team/2020/saliq shamim shah.jpg',
    },
    {
      name: 'Bishal Sikdar',
      position: 'Corporate Executive',
      image: '/images/team/2020/bishal sikdar.jpg',
    },
    {
      name: 'Sudha Sindhuja Nayani',
      position: 'Corporate Executive',
      image: '/images/team/2020/sudha sindhuja nayani.jpg',
    },
    {
      name: 'Aditya Agrawal',
      position: 'Vehicle Dynamics Associate - Aerodynamics',
      image: '/images/team/2020/aditya agrawal.jpg',
    },
    {
      name: 'Rasesh Lagdev',
      position: 'Composites Associate',
      image: '/images/team/2020/rasesh lagdev.jpg',
    },
    {
      name: 'Abraham K Mathew',
      position: 'Powertrain Associate - Intake',
      image: '/images/team/2020/abraham k mathew.jpg',
    },
    {
      name: 'Hariesh Sekar',
      position: 'Electrical and Electronics Associate',
      image: '/images/team/2020/hariesh sekar.jpg',
    },
    {
      name: 'Mohit Galani',
      position: 'Powertrain Associate - Cooling System',
      image: '/images/team/2020/mohit galani.jpg',
    },
    {
      name: 'Pranjal Saxena',
      position: 'Powertrain Associate - Drivetrain',
      image: '/images/team/2020/pranjal saxena.jpg',
    },
    {
      name: 'Jayaditya Reddy J',
      position: 'Vehicle Dynamics Associate - Steering',
      image: '/images/team/2020/jayaditya reddy j.jpg',
    },
  ],
  2019: [
    {
      name: 'Kunal Kakkar',
      position: 'Team Captain',
      image: '/images/team/2019/kunal kakkar.jpg',
    },
    {
      name: 'Aman Maheshwari',
      position: 'Project Manager',
      image: '/images/team/2019/aman maheshwari.jpg',
    },
    {
      name: 'Junaid Singh',
      position: 'Corporate Director',
      image: '/images/team/2019/junaid singh.jpg',
    },
    {
      name: 'Ankur Singh',
      position: 'Technical Director -VD',
      image: '/images/team/2019/ankur singh.jpg',
    },
    {
      name: 'Abhishek Nanda',
      position: 'Technical Director - Powertrain',
      image: '/images/team/2019/abhishek nanda.jpg',
    },
    {
      name: 'Md Fahim',
      position: 'Media & PR Lead',
      image: '/images/team/2019/md fahim.jpg',
    },
    {
      name: 'Kanwarpal Singh Sekhon',
      position: 'Research & Development Lead',
      image: '/images/team/2019/kanwarpal singh sekhon.jpg',
    },
    {
      name: 'Aravind S',
      position: 'Vehicle Testing Lead',
      image: '/images/team/2019/aravind s.jpg',
    },
    {
      name: 'Darpan Yadav',
      position: 'Manufacturing Lead',
      image: '/images/team/2019/darpan yadav.jpg',
    },
    {
      name: 'Pradyumn Pandey',
      position: 'Finance Manager',
      image: '/images/team/2019/pradyumn pandey.jpg',
    },
    {
      name: 'Tenzin',
      position: 'Driverless Lead',
      image: '/images/team/2019/tenzin.jpg',
    },
    {
      name: 'Aparajito Ganguli',
      position: 'Powertrain Engineer - Intake System',
      image: '/images/team/2019/aparajito ganguli.jpg',
    },
    {
      name: 'Sourav Pattnaik',
      position: 'Powertrain Engineer - Cooling System',
      image: '/images/team/2019/sourav pattnaik.jpg',
    },
    {
      name: 'Harshmeet Singh',
      position: 'Powertrain Engineer - Exhaust System',
      image: '/images/team/2019/harshmeet singh.jpg',
    },
    {
      name: 'Harvinder Singh',
      position: 'Powertrain Engineer - Engine Tuning & Mods',
      image: '/images/team/2019/harvinder singh.jpg',
    },
    {
      name: 'Gautam Kavuri',
      position: 'Vehicle Dynamicist - Suspension',
      image: '/images/team/2019/gautam kavuri.jpg',
    },
    {
      name: 'Satvik Vatsa',
      position: 'Vehicle Dynamicist - Wheel Assembly',
      image: '/images/team/2019/satvik vatsa.jpg',
    },
    {
      name: 'Sparsh Agarwal',
      position: 'Vehicle Dynamicist - Suspension',
      image: '/images/team/2019/sparsh agarwal.jpg',
    },
    {
      name: 'Ayush Singh',
      position: 'Vehicle Dynamicist - Chassis',
      image: '/images/team/2019/ayush singh.jpg',
    },
    {
      name: 'Yohann Bhumgara',
      position: 'Vehicle Dynamicist - Composites & Manufacturing',
      image: '/images/team/2019/yohann bhumgara.jpg',
    },
    {
      name: 'Ambarish Pradeep',
      position: 'Vehicle Dynamicist - Aerodynamics',
      image: '/images/team/2019/ambarish pradeep.jpg',
    },
    {
      name: 'Abhinav Roy',
      position: 'Electrical & Electronics Engineer',
      image: '/images/team/2019/abhinav roy.jpg',
    },
    {
      name: 'Prasannjeet Singh',
      position: 'Corporate Executive',
      image: '/images/team/2019/prasannjeet singh.jpg',
    },
    {
      name: 'Bishal Sikdar',
      position: 'Corporate Executive',
      image: '/images/team/2019/bishal sikdar.jpg',
    },
    {
      name: 'Kshitij Singh',
      position: 'Vehicle Dynamics Associate - Chassis',
      image: '/images/team/2019/kshitij singh.jpg',
    },
    {
      name: 'Rituraj Das',
      position: 'Poertrain Associate - Engine Mods',
      image: '/images/team/2019/rituraj das.jpg',
    },
    {
      name: 'Saliq Shah',
      position: 'Powertain Associate - Engine mods',
      image: '/images/team/2019/saliq shah.jpg',
    },
    {
      name: 'Ankit Kumar Sahu',
      position: 'Vehicle Dynamics Associate - Aerodynamics',
      image: '/images/team/2019/ankit kumar sahu.jpg',
    },
    {
      name: 'Subodh Dangi',
      position: 'Vehicle Dynamics Associate - Suspension',
      image: '/images/team/2019/subodh dangi.jpg',
    },
    {
      name: 'Sudha Sindhuja Nayani',
      position: 'Corporate Executive',
      image: '/images/team/2019/sudha sindhuja nayani.jpg',
    },
    {
      name: 'Suresh kumar',
      position: 'Vehicle Dynamics Associate - Brakes',
      image: '/images/team/2019/suresh kumar.jpg',
    },
    {
      name: 'Udit Mini',
      position: 'Electrical & Electronics Associate',
      image: '/images/team/2019/udit mini.jpg',
    },
    {
      name: 'Shashwat Geel',
      position: 'Vehicle Dynamics Associate - Steering',
      image: '/images/team/2019/shashwat geel.jpg',
    },
  ],
  2018: [
    {
      name: 'Saiduth Ramesh',
      position: 'Team Captain',
      image: '/images/team/2018/saiduth ramesh.jpg',
    },
    {
      name: 'Atharva Kadam',
      position: 'Project Manager & Cost Report Lead',
      image: '/images/team/2018/atharva kadam.jpg',
    },
    {
      name: 'Adyasha Nanda',
      position: 'Corporate Director & Buisness Plan Lead',
      image: '/images/team/2018/adyasha nanda.jpg',
    },
    {
      name: 'Kshitij Soni',
      position: 'Chief Vehicle Dynamics Engineer',
      image: '/images/team/2018/kshitij soni.jpg',
    },
    {
      name: 'Akshay Kumar',
      position: 'CHIEF Powertrain Engineer',
      image: '/images/team/2018/akshay kumar.jpg',
    },
    {
      name: 'Dhruv Mehta',
      position: 'Electrical & Electronics Lead',
      image: '/images/team/2018/dhruv mehta.jpg',
    },
    {
      name: 'Praneet Ayyagari',
      position: 'Finance Manager',
      image: '/images/team/2018/praneet ayyagari.jpg',
    },
    {
      name: 'Gopal Dwivedi',
      position: 'Manufacturing Lead',
      image: '/images/team/2018/gopal dwivedi.jpg',
    },
    {
      name: 'Anirudh Reddy',
      position: 'Driver Training Lead',
      image: '/images/team/2018/anirudh reddy.jpg',
    },
    {
      name: 'Harshit Gambhir',
      position: 'Electrical & Driverless Lead',
      image: '/images/team/2018/harshit gambhir.jpg',
    },
    {
      name: 'Varun Jain',
      position: 'Chief Vehicle Testing Engineer',
      image: '/images/team/2018/varun jain.jpg',
    },
    {
      name: 'Arunav Bohra',
      position: 'CFD Lead',
      image: '/images/team/2018/arunav bohra.jpg',
    },
    {
      name: 'Kunal Kakkar',
      position: 'Wheel Assembly',
      image: '/images/team/2018/kunal kakkar.jpg',
    },
    {
      name: 'Junaid Singh',
      position: 'Tires & Ride & Roll Rate',
      image: '/images/team/2018/junaid singh.jpg',
    },
    {
      name: 'K. Gautam',
      position: 'Kinematics',
      image: '/images/team/2018/k. gautam.jpg',
    },
    {
      name: 'Pradyumn Pandey',
      position: 'Frame And Ergonomics',
      image: '/images/team/2018/pradyumn pandey.jpg',
    },
    {
      name: 'Ankur Singh',
      position: 'R & R Rate & Vehicle Part Testing',
      image: '/images/team/2018/ankur singh.jpg',
    },
    {
      name: 'S. Aravind',
      position: 'Brakes & Vehicle Part Testing',
      image: '/images/team/2018/s. aravind.jpg',
    },
    {
      name: 'Kunal Pandey',
      position: 'Brakes',
      image: '/images/team/2018/kunal pandey.jpg',
    },
    {
      name: 'Darpan Yadav',
      position: 'Steering & Tires',
      image: '/images/team/2018/darpan yadav.jpg',
    },
    {
      name: 'Vinith Kishan',
      position: 'Aero Design',
      image: '/images/team/2018/vinith kishan.jpg',
    },
    {
      name: 'Aparajito Ganguli',
      position: 'Composites',
      image: '/images/team/2018/aparajito ganguli.jpg',
    },
    {
      name: 'Yohann Bhumgara',
      position: 'Composites',
      image: '/images/team/2018/yohann bhumgara.jpg',
    },
    {
      name: 'Aman Maheshwari',
      position: 'Cooling System',
      image: '/images/team/2018/aman maheshwari.jpg',
    },
    {
      name: 'Shikhar Sehgal',
      position: 'Intake',
      image: '/images/team/2018/shikhar sehgal.jpg',
    },
    {
      name: 'Abhishek Nanda',
      position: 'Exhaust',
      image: '/images/team/2018/abhishek nanda.jpg',
    },
    {
      name: 'Kanwarpal Singh',
      position: 'Engine Mods & Control System',
      image: '/images/team/2018/kanwarpal singh.jpg',
    },
    {
      name: 'Abhinav Roy',
      position: 'Engine Electronics',
      image: '/images/team/2018/abhinav roy.jpg',
    },
    {
      name: 'MD FAHIM',
      position: 'Transmission',
      image: '/images/team/2018/md fahim.jpg',
    },
    {
      name: 'Aditya Abraham',
      position: 'Senior Corporate Excecutive',
      image: '/images/team/2018/aditya abraham.jpg',
    },
    {
      name: 'Aromal Jacob',
      position: 'Corporate Excecutive',
      image: '/images/team/2018/aromal jacob.jpg',
    },
    {
      name: 'Sai Kiran',
      position: 'Media Excecutive',
      image: '/images/team/2018/sai kiran.jpg',
    },
    {
      name: 'Vishnu Rajeev',
      position: 'Corporate Excecutive',
      image: '/images/team/2018/vishnu rajeev.jpg',
    },
    {
      name: 'Karthik Ganesh',
      position: 'Corporate Excecutive',
      image: '/images/team/2018/karthik ganesh.jpg',
    },
    {
      name: 'Ambarish Pradeep',
      position: 'C.F.D.',
      image: '/images/team/2018/ambarish pradeep.jpg',
    },
    {
      name: 'Hrishav Paul',
      position: 'Machining Coder',
      image: '/images/team/2018/hrishav paul.jpg',
    },
    {
      name: 'Aparajita Singh',
      position: 'Driverless',
      image: '/images/team/2018/aparajita singh.jpg',
    },
    {
      name: 'Prakhar Dixit',
      position: 'Driverless',
      image: '/images/team/2018/prakhar dixit.jpg',
    },
  ],
  2017: [
    {
      name: 'Anil Kumar',
      position: 'Team Captain',
      image: '/images/team/2017/anil.jpg',
    },
    {
      name: 'Ronak Hemani',
      position: 'Project Manager',
      image: '/images/team/2017/ronak.jpg',
    },
    {
      name: 'Akhil Linga',
      position: 'Chief Powertrain Engineer',
      image: '/images/team/2017/akhil.jpg',
    },
    {
      name: 'Roni Ayan Deb',
      position: 'Chief Vehicle Dynamics Engineer',
      image: '/images/team/2017/roni.jpg',
    },
    {
      name: 'Rahul Jaiswal',
      position: 'Vehicle Testing Lead',
      image: '/images/team/2017/rahul.jpg',
    },
    {
      name: 'Divyansh tyagi',
      position: 'Cost Report Lead',
      image: '/images/team/2017/divyansh.jpg',
    },
    {
      name: 'Akbar Ali Baig',
      position: 'Business Plan Lead',
      image: '/images/team/2017/akbar.jpg',
    },
    {
      name: 'Pradeep Kumar',
      position: 'Manufacturing Lead VD',
      image: '/images/team/2017/pradeep.jpg',
    },
    {
      name: 'VV Praveen',
      position: 'Manufacturing Lead Powertrain',
      image: '/images/team/2017/vv.jpg',
    },
    {
      name: 'Mriganka Kumar',
      position: 'Sponsorship Manager',
      image: '/images/team/2017/mriganka.jpg',
    },
    {
      name: 'Uday Leekha',
      position: 'Inventory And Pits Control Manager',
      image: '/images/team/2017/uday.jpg',
    },
    {
      name: 'Deepak Reddy',
      position: 'Logistics',
      image: '/images/team/2017/deepak.jpg',
    },
    {
      name: 'Krishna Bhargav',
      position: 'Website And App Devoloper',
      image: '/images/team/2017/krishna.jpg',
    },
    {
      name: 'Aditya Chacko ABRAHAM',
      position: 'Content Management Associate',
      image: '/images/team/2017/aditya.jpg',
    },
    {
      name: 'Adyasha Nanda',
      position: 'Business Plan Associate',
      image: '/images/team/2017/adyasha.jpg',
    },
    {
      name: 'Akshay Kumar',
      position: 'Transmissions System',
      image: '/images/team/2017/akshay.jpg',
    },
    {
      name: 'Anirudh Chundawat',
      position: 'Pit Design And Fab Bay Maintanence',
      image: '/images/team/2017/anirudh.jpg',
    },
    {
      name: 'Atharva Kadam',
      position: 'Frame',
      image: '/images/team/2017/atharva.jpg',
    },
    {
      name: 'Dhruv Mehta',
      position: 'Engine Electronics',
      image: '/images/team/2017/dhruv.jpg',
    },
    {
      name: 'Gopal Krishna Dwivedi',
      position: 'Intake',
      image: '/images/team/2017/gopal.jpg',
    },
    {
      name: 'Harshit Gambhir',
      position: 'Driver Console',
      image: '/images/team/2017/harshit.jpg',
    },
    {
      name: 'Junaid Singh',
      position: 'Ride And Roll Rate',
      image: '/images/team/2017/junaid.jpg',
    },
    {
      name: 'Kshitij Soni',
      position: 'Steering Systems',
      image: '/images/team/2017/kshitij.jpg',
    },
    {
      name: 'Kunal Kakkar',
      position: 'Wheel Assembly',
      image: '/images/team/2017/kunal.jpg',
    },
    {
      name: 'Mobashir Afzal',
      position: 'Fab Bay Maintanence',
      image: '/images/team/2017/mobashir.jpg',
    },
    {
      name: 'Navneet Kumar',
      position: 'Vehicle Part Testing',
      image: '/images/team/2017/navneet.jpg',
    },
    {
      name: 'Praneet Ayyagari',
      position: 'Branding And Publicity Associate',
      image: '/images/team/2017/praneet.jpg',
    },
    {
      name: 'Saiduth Ramesh',
      position: 'Aero Pack Design',
      image: '/images/team/2017/saiduth.jpg',
    },
    {
      name: 'Shawn Simeon',
      position: 'Media',
      image: '/images/team/2017/shawn.jpg',
    },
    {
      name: 'Shreya Manglam',
      position: 'Pit Design And Fab Bay Maintanence',
      image: '/images/team/2017/shreya.jpg',
    },
    {
      name: 'Varun Jain',
      position: 'DAQ Vehicle Testing',
      image: '/images/team/2017/varun.jpg',
    },
  ],
  2016: [
    {
      name: 'BVN Madhu',
      position: 'Team Captain',
      image: '/images/team/2016/bvn.jpg',
    },
    {
      name: 'Kaustabh Roy',
      position: 'Project Manager',
      image: '/images/team/2016/kaustabh.jpg',
    },
    {
      name: 'Aaradhya Nagar',
      position: 'Corporate Director',
      image: '/images/team/2016/aaradhya.jpg',
    },
    {
      name: 'Shivam Bhatia',
      position: 'Technical Director',
      image: '/images/team/2016/shivam.jpg',
    },
    {
      name: 'Salman Siddiqui',
      position: 'Technical Director',
      image: '/images/team/2016/salman.jpg',
    },
    {
      name: 'Rohan Date',
      position: 'Chassis Lead',
      image: '/images/team/2016/rohan.jpg',
    },
    {
      name: 'Vaibhav Kotnala',
      position: 'Steering Lead',
      image: '/images/team/2016/vaibhavk.jpg',
    },
    {
      name: 'Vaibhav Lalwani',
      position: 'Drivetrain Lead',
      image: '/images/team/2016/vaibhavl.jpg',
    },
    {
      name: 'Ronak Hemani',
      position: 'Vehicle Dynamics Engineer',
      image: '/images/team/2016/ronak.jpg',
    },
    {
      name: 'Divyansh Tyagi',
      position: 'Vehicle Dynamics Engineer',
      image: '/images/team/2016/divyansh.jpg',
    },
    {
      name: 'Roni Ayan Deb',
      position: 'Vehicle Dynamics Engineer',
      image: '/images/team/2016/roni.jpg',
    },
    {
      name: 'Anil Kumar',
      position: 'Powertrain Engineer',
      image: '/images/team/2016/anil.jpg',
    },
    {
      name: 'Akbar Ali Baig',
      position: 'Brakes/ Aerodynamics Engineer',
      image: '/images/team/2016/akbar.jpg',
    },
    {
      name: 'Uday Leekha',
      position: 'Brakes Engineer',
      image: '/images/team/2016/uday.jpg',
    },
    {
      name: 'Rahul Jaiswal',
      position: 'Drivetrain Engineer',
      image: '/images/team/2016/rahul.jpg',
    },
    {
      name: 'Akhil Linga',
      position: 'Powertrain Engineer',
      image: '/images/team/2016/akhil.jpg',
    },
    {
      name: 'V.V. Praveen',
      position: 'Powertrain Engineer',
      image: '/images/team/2016/v.v..jpg',
    },
    {
      name: 'Deepak Reddy',
      position: 'Electrical Engineer',
      image: '/images/team/2016/deepak.jpg',
    },
    {
      name: 'Pradeep Kumar',
      position: 'Vehicle Dynamics Engineer',
      image: '/images/team/2016/pradeep.jpg',
    },
    {
      name: 'Tarun Kumar',
      position: 'Drivetrain Engineer',
      image: '/images/team/2016/tarun.jpg',
    },
    {
      name: 'Atharva Kadam',
      position: 'Chassis Engineer',
      image: '/images/team/2016/atharva.jpg',
    },
    {
      name: 'Saiduth Ramesh',
      position: 'Powertrain/ Aerodynamics Engineer',
      image: '/images/team/2016/saiduth.jpg',
    },
    {
      name: 'Priyanth Kumar',
      position: 'Electrical Engineer',
      image: '/images/team/2016/priyanth.jpg',
    },
    {
      name: 'Sai Santosh',
      position: 'Electrical Engineer',
      image: '/images/team/2016/sai.jpg',
    },
    {
      name: 'Chirag Samdaria',
      position: 'Corporate Associate',
      image: '/images/team/2016/chirag.jpg',
    },
  ],
  2015: [
    {
      name: 'Prashanth Kumar',
      position: 'Captain And Electronics Lead',
      image: '/images/team/2015/prashanth.jpg',
    },
    {
      name: 'Anshul Chaudhary',
      position: 'Project Manager/Steering And Aero Lead',
      image: '/images/team/2015/anshul.jpg',
    },
    {
      name: 'Pritish Panda',
      position: 'Brakes Lead',
      image: '/images/team/2015/pritish.jpg',
    },
    {
      name: 'Gautham K ram',
      position: 'Suspension Lead',
      image: '/images/team/2015/gautham.jpg',
    },
    {
      name: 'Nilai Suresh',
      position: 'Driver And Suspension Lead',
      image: '/images/team/2015/nilai.jpg',
    },
    {
      name: 'Eeshaan Geel',
      position: 'Wheel Assembly Lead',
      image: '/images/team/2015/eeshaan.jpg',
    },
    {
      name: 'Abhishek Kumar',
      position: 'Chassis Lead',
      image: '/images/team/2015/abhishek.jpg',
    },
    {
      name: 'Murali Krishnan',
      position: 'Drivetrain Lead',
      image: '/images/team/2015/murali.jpg',
    },
    {
      name: 'Aditya Trivedi',
      position: 'Powertrain Lead',
      image: '/images/team/2015/aditya.jpg',
    },
    {
      name: 'Salman Siddiqui',
      position: 'Powertrain Engineer',
      image: '/images/team/2015/salman.jpg',
    },
    {
      name: 'Bvn Madhu',
      position: 'Suspension Engineer',
      image: '/images/team/2015/bvn.jpg',
    },
    {
      name: 'Shivam Bhatia',
      position: 'Suspension Engineer',
      image: '/images/team/2015/shivam.jpg',
    },
    {
      name: 'Kaustabh Roy',
      position: 'Wheel Assembly Engineer',
      image: '/images/team/2015/kaustabh.jpg',
    },
    {
      name: 'Aaradhya Nagar',
      position: 'Senior Corporate Executive',
      image: '/images/team/2015/aaradhya.jpg',
    },
    {
      name: 'Vaibhav Kotnala',
      position: 'Steering Engineer',
      image: '/images/team/2015/vaibhavk.jpg',
    },
    {
      name: 'Vaibhav Lalwani',
      position: 'Drivetrain Engineer',
      image: '/images/team/2015/vaibhavl.jpg',
    },
    {
      name: 'Rohan Date',
      position: 'Chassis Engineer',
      image: '/images/team/2015/rohan.jpg',
    },
    {
      name: 'Roni Ayan Deb',
      position: 'Suspension Engineer',
      image: '/images/team/2015/roni.jpg',
    },
    {
      name: 'Anil Kumar Chaval',
      position: 'Powertrain Engineer',
      image: '/images/team/2015/anil.jpg',
    },
    {
      name: 'Akbar Ali Baig',
      position: 'Brakes Engineer',
      image: '/images/team/2015/akbar.jpg',
    },
  ],
  2014: [
    {
      name: 'Ratna Mitheysh',
      position: 'Suspension Lead',
      image: '/images/team/2014/ratna mitheysh.jpg',
    },
    {
      name: 'Abhinav Kumar',
      position: 'Steering Lead',
      image: '/images/team/2014/abhinav kumar.jpg',
    },
    {
      name: 'Rishi Raj Singh',
      position: 'Corporate Director',
      image: '/images/team/2014/rishi raj singh.jpg',
    },
    {
      name: 'Rahul Kumar Singh',
      position: 'Brakes & Wheel Assembly Lead',
      image: '/images/team/2014/rahul kumar singh.jpg',
    },
    {
      name: 'Harshin Lalpet',
      position: 'Chassis',
      image: '/images/team/2014/harshin lalpet.jpg',
    },
    {
      name: 'Murtaza Khambaty',
      position: 'Powertrain Lead',
      image: '/images/team/2014/murtaza khambaty.jpg',
    },
    {
      name: 'Shidhartha De',
      position: 'Powertrain Lead',
      image: '/images/team/2014/shidhartha de.jpg',
    },
    {
      name: 'Murali Krishnan',
      position: 'Powertrain Engineer',
      image: '/images/team/2014/murali krishnan.jpg',
    },
    {
      name: 'Aditya Trivedi',
      position: 'Powertrain Engineer',
      image: '/images/team/2014/aditya trivedi.jpg',
    },
    {
      name: 'Vishwaprashanth Kumar',
      position: 'Electronics Engineer',
      image: '/images/team/2014/vishwaprashanth kumar.jpg',
    },
    {
      name: 'Aman Munjal',
      position: 'Electronics Engineer',
      image: '/images/team/2014/aman munjal.jpg',
    },
    {
      name: 'Eeshaan Geel',
      position: 'Chassis & CAD Engineer',
      image: '/images/team/2014/eeshaan geel.jpg',
    },
    {
      name: 'Abhishek Kumar',
      position: 'Chassis & CAD Engineer',
      image: '/images/team/2014/abhishek kumar.jpg',
    },
    {
      name: 'Pritish Panda',
      position: 'Brakes Engineer',
      image: '/images/team/2014/pritish panda.jpg',
    },
    {
      name: 'Anshul Chaudhry',
      position: 'Steering & CAD Engineer',
      image: '/images/team/2014/anshul chaudhry.jpg',
    },
    {
      name: 'Gautham K Ram',
      position: 'Suspension Engineer',
      image: '/images/team/2014/gautham k ram.jpg',
    },
    {
      name: 'Nilai Suresh',
      position: 'Suspension Engineer',
      image: '/images/team/2014/nilai suresh.jpg',
    },
    {
      name: 'Pavan Teja',
      position: 'Suspension Engineer',
      image: '/images/team/2014/pavan teja.jpg',
    },
    {
      name: 'Bharath Iyer',
      position: 'Corporate & Marketing Associate',
      image: '/images/team/2014/bharath iyer.jpg',
    },
  ],
  2013: [
    {
      name: 'Phani Chebiyyam',
      position: 'Team Captain | Chassis Lead',
      image: '/images/team/2013/phani chebiyyam.jpg',
    },
    {
      name: 'Aditya Makineni',
      position: 'Technical Director | Vehicle Dynamics Lead',
      image: '/images/team/2013/aditya makineni.jpg',
    },
    {
      name: 'Aman Singh Kakar',
      position: 'Vehicle Dynamics Engineer',
      image: '/images/team/2013/aman singh kakar.jpg',
    },
    {
      name: 'Shailee Upadhyay',
      position: 'Vehicle Dynamics Engineer',
      image: '/images/team/2013/shailee upadhyay.jpg',
    },
    {
      name: 'Roshni Francis',
      position: 'Electronics Lead',
      image: '/images/team/2013/roshni francis.jpg',
    },
    {
      name: 'Shreyas Sansuddi',
      position: 'Chassis Lead',
      image: '/images/team/2013/shreyas sansuddi.jpg',
    },
    {
      name: 'Rahul Kumar Singh',
      position: 'Brakes Lead',
      image: '/images/team/2013/rahul kumar singh.jpg',
    },
    {
      name: 'Ratna Mitheysh',
      position: 'Vice Captain | Vehicle Dynamics Engineer',
      image: '/images/team/2013/ratna mitheysh.jpg',
    },
    {
      name: 'Abhinav Kumar',
      position: 'Steering Lead | Accounts',
      image: '/images/team/2013/abhinav kumar.jpg',
    },
    {
      name: 'Shidhartha De',
      position: 'Powertrain Engineer',
      image: '/images/team/2013/shidhartha de.jpg',
    },
    {
      name: 'Harshin Lalpet',
      position: 'Chassis & Composites Engineer',
      image: '/images/team/2013/harshin lalpet.jpg',
    },
    {
      name: 'Murtaza Khambaty',
      position: 'Powertrain Engineer',
      image: '/images/team/2013/murtaza khambaty.jpg',
    },
    {
      name: 'Rishi Raj Singh',
      position: 'Corporate & Marketing Associate',
      image: '/images/team/2013/rishi raj singh.jpg',
    },
    {
      name: 'Pavan Teja',
      position: 'Suspension Engineer',
      image: '/images/team/2013/pavan teja.jpg',
    },
    {
      name: 'Vishwaprashanth Kumar',
      position: 'Electronics Engineer',
      image: '/images/team/2013/vishwaprashanth kumar.jpg',
    },
    {
      name: 'Murali Krishnan',
      position: 'Powertrain Engineer',
      image: '/images/team/2013/murali krishnan.jpg',
    },
    {
      name: 'Bharath Iyer',
      position: 'Corporate & Marketing Associate',
      image: '/images/team/2013/bharath iyer.jpg',
    },
    {
      name: 'Anshul Chaudhry',
      position: 'Steering & CAD Engineer',
      image: '/images/team/2013/anshul chaudhry.jpg',
    },
    {
      name: 'Eeshaan Geel',
      position: 'Chassis & CAD Engineer',
      image: '/images/team/2013/eeshaan geel.jpg',
    },
    {
      name: 'Pritish Panda',
      position: 'Brakes Engineer',
      image: '/images/team/2013/pritish panda.jpg',
    },
    {
      name: 'Aditya Trivedi',
      position: 'Powertrain Engineer',
      image: '/images/team/2013/aditya trivedi.jpg',
    },
    {
      name: 'Aman Munjal',
      position: 'Electronics Engineer',
      image: '/images/team/2013/aman munjal.jpg',
    },
    {
      name: 'Gautham K Ram',
      position: 'Suspension Engineer',
      image: '/images/team/2013/gautham k ram.jpg',
    },
    {
      name: 'Nilai Suresh',
      position: 'Suspension Engineer',
      image: '/images/team/2013/nilai suresh.jpg',
    },
    {
      name: 'Abhishek Kumar',
      position: 'Chassis & CAD Engineer',
      image: '/images/team/2013/abhishek kumar.jpg',
    },
  ],
  2012: [
    {
      name: 'Preetham Reddy',
      position: 'Team Captain',
      image: '/images/team/2012/preetham reddy.jpg',
    },
    {
      name: 'Akhilesh Krishnan',
      position: 'Corporate Director',
      image: '/images/team/2012/akhilesh krishnan.jpg',
    },
    {
      name: 'Rishabh Dugar',
      position: 'Brand Manager',
      image: '/images/team/2012/rishabh dugar.jpg',
    },
    {
      name: 'Anand Kumar',
      position: 'Fabrication Head and Technical Incharge',
      image: '/images/team/2012/anand kumar.jpg',
    },
    {
      name: 'Avinash Karthik',
      position: 'Steering Incharge',
      image: '/images/team/2012/avinash karthik.jpg',
    },
    {
      name: 'Ramji Kaushik',
      position: 'Chassis Department and Sourcing',
      image: '/images/team/2012/ramji kaushik.jpg',
    },
    {
      name: 'Raj Lalwani',
      position: 'Designer and Drafter',
      image: '/images/team/2012/raj lalwani.jpg',
    },
    {
      name: 'Arka Chattaraj',
      position: 'Engines and Inventory Management',
      image: '/images/team/2012/arka chattaraj.jpg',
    },
    {
      name: 'Aman Singh Kakar',
      position: 'Suspension Department and Fabricator',
      image: '/images/team/2012/aman singh kakar.jpg',
    },
    {
      name: 'Shreyas Sansuddi',
      position: 'Chassis Department Member',
      image: '/images/team/2012/shreyas sansuddi.jpg',
    },
    {
      name: 'Roshni Francis',
      position: 'Steering Department Member',
      image: '/images/team/2012/roshni francis.jpg',
    },
    {
      name: 'Poojith Raj',
      position: 'Component Sourcing and Fabricator',
      image: '/images/team/2012/poojith raj.jpg',
    },
    {
      name: 'Phani Chebiyyam',
      position: 'Chassis Department Member',
      image: '/images/team/2012/phani chebiyyam.jpg',
    },
    {
      name: 'Aditya Makineni',
      position: 'Suspension Department and Fabricator',
      image: '/images/team/2012/aditya makineni.jpg',
    },
    {
      name: 'Shailee Upadhyay',
      position: 'Suspension Department and Fabricator',
      image: '/images/team/2012/shailee upadhyay.jpg',
    },
    {
      name: 'Rupam Shrivastava',
      position: 'Chassis Department Member',
      image: '/images/team/2012/rupam shrivastava.jpg',
    },
    {
      name: 'Harshin Lalpet',
      position: 'Material Procurement and Fabricator',
      image: '/images/team/2012/harshin lalpet.jpg',
    },
    {
      name: 'Vrushti Modi',
      position: 'Electrical Department',
      image: '/images/team/2012/vrushti modi.jpg',
    },
    {
      name: 'Abhinav Kumar',
      position: 'Steering Department Member',
      image: '/images/team/2012/abhinav kumar.jpg',
    },
    {
      name: 'Ratna Mitheysh',
      position: 'Suspension Department and Fabricator',
      image: '/images/team/2012/ratna mitheysh.jpg',
    },
    {
      name: 'Rahul Kumar Singh',
      position: 'Brakes Department and Fabricator',
      image: '/images/team/2012/rahul kumar singh.jpg',
    },
    {
      name: 'Shaleen Bahadur',
      position: 'Brakes Department and Fabricator',
      image: '/images/team/2012/shaleen bahadur.jpg',
    },
    {
      name: 'Shubham Sharma',
      position: 'Fabricator',
      image: '/images/team/2012/shubham sharma.jpg',
    },
    {
      name: 'Shidhartha De',
      position: 'Driver',
      image: '/images/team/2012/shidhartha de.jpg',
    },
    {
      name: 'Vishnu Prasad',
      position: 'Driver',
      image: '/images/team/2012/vishnu prasad.jpg',
    },
  ],
  2011: [
    {
      name: 'Pushkar Venkat Narayan',
      position: 'Team Captain',
      image: '/images/team/2011/pushkar venkat narayan.jpg',
    },
    {
      name: 'Tarun Kumar Tripathy',
      position: 'Corporate Director',
      image: '/images/team/2011/tarun kumar tripathy.jpg',
    },
    {
      name: 'Karthik Mohan',
      position: 'Technical Director',
      image: '/images/team/2011/karthik mohan.jpg',
    },
    {
      name: 'Ajay Kumar Singh',
      position: 'Powertrain',
      image: '/images/team/2011/ajay kumar singh.jpg',
    },
    {
      name: 'Akshay Jain',
      position: 'Suspension',
      image: '/images/team/2011/akshay jain.jpg',
    },
    {
      name: 'Aniket Kumar',
      position: 'Electrical & Electronics',
      image: '/images/team/2011/aniket kumar.jpg',
    },
    {
      name: 'Baibhab Guru',
      position: 'Electrical & Electronics',
      image: '/images/team/2011/baibhab guru.jpg',
    },
    {
      name: 'Preetham Reddy',
      position: 'Suspension',
      image: '/images/team/2011/preetham reddy.jpg',
    },
    {
      name: 'Anupam Chakraborty',
      position: 'Suspension',
      image: '/images/team/2011/anupam chakraborty.jpg',
    },
    {
      name: 'Akhilesh Krishnan',
      position: 'Brakes',
      image: '/images/team/2011/akhilesh krishnan.jpg',
    },
    {
      name: 'Anand Kumar',
      position: 'Brakes/ Driver',
      image: '/images/team/2011/anand kumar.jpg',
    },
    {
      name: 'Rishabh Dugar',
      position: 'Aerodynamics/ Body',
      image: '/images/team/2011/rishabh dugar.jpg',
    },
    {
      name: 'Prakanshu Bajpai',
      position: 'Chassis',
      image: '/images/team/2011/prakanshu bajpai.jpg',
    },
    {
      name: 'Sudha Ramaswamy',
      position: 'Suspension',
      image: '/images/team/2011/sudha ramaswamy.jpg',
    },
    {
      name: 'Ansh Verma',
      position: 'Chassis',
      image: '/images/team/2011/ansh verma.jpg',
    },
    {
      name: 'Archisman Sen',
      position: 'Accounts/ Driver',
      image: '/images/team/2011/archisman sen.jpg',
    },
    {
      name: 'Abhilash Raghunathan',
      position: 'Body/ Driver',
      image: '/images/team/2011/abhilash raghunathan.jpg',
    },
    {
      name: 'Mahesh Ramachandran',
      position: 'Electrical & Electronics',
      image: '/images/team/2011/mahesh ramachandran.jpg',
    },
    {
      name: 'Rashmi Sharma',
      position: 'Electrical & Electronics',
      image: '/images/team/2011/rashmi sharma.jpg',
    },
    {
      name: 'Avinash Karthik',
      position: 'Fabrication',
      image: '/images/team/2011/avinash karthik.jpg',
    },
    {
      name: 'Sandeep Ganesh',
      position: 'Fabrication',
      image: '/images/team/2011/sandeep ganesh.jpg',
    },
    {
      name: 'Raj Lalwani',
      position: 'Fabrication',
      image: '/images/team/2011/raj lalwani.jpg',
    },
    {
      name: 'Kaushik Ramji',
      position: 'Fabrication',
      image: '/images/team/2011/kaushik ramji.jpg',
    },
    {
      name: 'Poojith Raj Kalluru',
      position: 'Fabrication',
      image: '/images/team/2011/poojith raj kalluru.jpg',
    },
  ]
};

export default function TeamPage() {
  const [activeYear, setActiveYear] = useState('2021');

  return (
    <div className='container mx-auto px-4 py-16'>
      <h1 className='mb-16 text-center text-7xl font-bold text-red-500'>
        <span className='text-black'>Our</span> Team
      </h1>
      <p className="text-black">DATA TO BE ENTERED</p>
      <Tabs defaultValue='2021' onValueChange={setActiveYear}>
        <TabsList className='mb-12 grid h-full w-full grid-cols-3 gap-2 overflow-x-auto px-4 lg:grid-cols-6'>
          <div className='col-span-3 flex justify-center space-x-2 lg:col-span-6'>
            {Object.keys(teamData)
              .reverse()
              .map((year) => (
                <TabsTrigger
                  key={year}
                  value={year}
                  className='border-2 border-red-500 bg-white px-4 py-2 text-black transition-colors duration-300 data-[state=active]:bg-red-500 data-[state=active]:text-white'
                >
                  {year}
                </TabsTrigger>
              ))}
          </div>
        </TabsList>

        {Object.entries(teamData).map(([year, members]) => (
          <TabsContent key={year} value={year} className='mt-16'>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className='grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3'
            >
              {members.map((member, index) => (
                <Card
                  key={index}
                  className='overflow-hidden shadow-lg transition-shadow duration-300 hover:shadow-xl'
                >
                  <CardContent className='p-0'>
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={300}
                      height={300}
                      className='h-72 w-full object-cover'
                    />
                    <div className='p-8'>
                      <h3 className='mb-3 text-xl font-semibold'>
                        {member.name}
                      </h3>
                        <p className='text-md text-gray-600'>{member.position}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </motion.div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}

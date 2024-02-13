import Head from 'next/head'
import Header from '@/components/Header'
import Link from 'next/link'
import React from 'react'
import { Experience, PageInfo, Project, Skill , Social } from '@/typings'
import { GetServerSideProps, GetStaticProps } from 'next'
import { fetchPageInfo } from '@/utils/fetchpageInfo'
import { fetchExperiences } from '@/utils/fetchExperiences'
import { fetchSkills } from '@/utils/fetchSkills'
import { fetchProjects } from '@/utils/fetchProjects'
import { fetchSocials } from '@/utils/fetchSocials'
import Hero from '@/components/Hero'
import About from '@/components/About'
import WorkExperience from '@/components/WorkExperience'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import ContactMe from '@/components/ContactMe'


type Props ={
  pageInfo:PageInfo;
  experiences: Experience[];
  skills: Skill[];
  projects: Project[];
  socials: Social[];
}


const Home = ({pageInfo, experiences, projects, skills, socials}: Props) => {
   return (

    
    <div className='bg-[rgb(36,36,36)] text-white 
    h-screen
    snap-y snap-mandatory overflow-y-scroll overflow-x-hidden
     z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]/80'>
      <Head>
        <title>Mike-Ndegwa-Portfoli</title>
      </Head>

      <Header socials={socials} />

      <section id="hero" className='snap-start'>
        <Hero pageInfo={pageInfo} />
      </section>
      
      <section id="about" className='snap-center'>
        <About pageInfo={pageInfo} />
      </section>

      <section id='experience' className='snap-center'>
        <WorkExperience experiences={experiences} />
      </section>
      
      <section id='skills' className='snap-start'>
        <Skills skills={skills}/>
      </section>

      <section id='projects' className='snap-start' >
        <Projects projects={projects} />
      </section>

      <section id='contact' className='snap-start'>
        <ContactMe />
      </section>

      <Link href="#hero">
        <footer className='sticky bottom-5 w-full cursor-pointer'>
          <div className='flex items-center justify-center'>
            <img 
             className='h-10 w-10 rounded-full filter grayscale hover:grayscale-0
             cursor-pointer'
             src='https://firebasestorage.googleapis.com/v0/b/familia-blog.appspot.com/o/files%2F95a6e270cd322f9fa89852bd6314345c.jpg?alt=media&token=b4a3dfd3-2730-4259-8b64-68e62ae28e0d'
             alt=''
             />
          </div>
        </footer>
      </Link>
    </div>
  )
}

export default Home;

export const getStaticProps: GetStaticProps<Props> = async () => {
  const pageInfo: PageInfo = await fetchPageInfo();
  const experiences: Experience[] = await fetchExperiences();
  const skills : Skill[] = await fetchSkills();
  const projects : Project[] = await fetchProjects();
  const socials : Social[] = await fetchSocials();

  return {
    props: {
      pageInfo,
      experiences,
      skills,
      projects,
      socials
    }, 
    revalidate: 10,
  }
}

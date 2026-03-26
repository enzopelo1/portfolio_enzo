import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { getProjectBySlug, getAdjacentProjects } from '../lib/data/projects-data';
import { ProjectHero } from '../components/project/ProjectHero';
import { ProjectContent } from '../components/project/ProjectContent';
import { ProjectNav } from '../components/project/ProjectNav';
import { ProjectCurtain } from '../components/project/ProjectCurtain';

export const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [isExiting, setIsExiting] = useState(false);
  const [nextSlug, setNextSlug] = useState<string | null>(null);

  const project = getProjectBySlug(slug ?? '');
  const { prev, next } = slug ? getAdjacentProjects(slug) : { prev: null, next: null };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  useEffect(() => {
    if (!project) navigate('/');
  }, [project, navigate]);

  const handleNavigate = (targetSlug: string) => {
    setNextSlug(targetSlug);
    setIsExiting(true);
    setTimeout(() => {
      navigate(`/projet/${targetSlug}`);
      setIsExiting(false);
      setNextSlug(null);
    }, 700);
  };

  if (!project) return null;

  return (
    <>
      <ProjectCurtain isExiting={isExiting} nextProject={nextSlug ? getProjectBySlug(nextSlug) : null} />

      <AnimatePresence mode="wait">
        <motion.div
          key={slug}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 0.6, delay: 0.1 } }}
          className="min-h-screen"
          style={{ backgroundColor: '#0C0C0C' }}
        >
          <ProjectHero project={project} onBack={() => navigate('/', { state: { fromProject: true } })} />
          <ProjectContent project={project} />
          <ProjectNav prev={prev} next={next} onNavigate={handleNavigate} />
        </motion.div>
      </AnimatePresence>
    </>
  );
};

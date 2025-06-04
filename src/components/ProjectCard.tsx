import React from 'react';
type ProjectCardProps = {
  image: string;
  title: string;
  techStack: string;
  description: string;
  liveLink?: string;
  codeLink?: string;
};
const ProjectCard: React.FC<ProjectCardProps> = ({
  image,
  title,
  techStack,
  description,
  liveLink,
  codeLink,
}) => {
  return (
    <div className='bg-[#282C33] border-[1px] border-[#ABB2BF] overflow-hidden w-[100%] max-w-[20rem] shadow-md font-mono'>
      <img src={image} alt={title} className='w-full h-44 object-cover' />
      <div className='p-4 box-border'>
        <p className='text-xs text-gray-400 tracking-wide'>{techStack}</p>
        <h3 className='text-l text-[#ff6600] font-bold mt-1 mb-1'>{title}</h3>
        <p className='text-sm text-gray-300 mb-4'>{description}</p>
        <div className='flex gap-2'>
          {liveLink && (
            <a
              href={liveLink}
              target='_blank'
              rel='noopener noreferrer'
              className='border border-[#7a28ff] text-[#7a28ff] text-sm px-3 py-1 rounded hover:bg-[#7a28ff] hover:text-white transition-all'
            >
              Live ↔
            </a>
          )}
          {codeLink && (
            <a
              href={codeLink}
              target='_blank'
              rel='noopener noreferrer'
              className='border border-[#7a28ff] text-[#7a28ff] text-sm px-3 py-1 rounded hover:bg-[#7a28ff] hover:text-white transition-all'
            >
              Code &gt;
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
export default ProjectCard;

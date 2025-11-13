import { useState } from 'react'

import ProjectsSidebar from './components/ProjectsSidebar'
import NewProject from './components/NewProject'
import NoProjectSelected from './components/NoProjectSelected'
import SelectedProjec from './components/SelectedProject.jsx'
import SelectedProject from './components/SelectedProject.jsx'
function App() {
const [projectsState, setProjectsState] = useState({
  selectedProjectId: undefined,
  projects: [],
  tasks: []
});

function handleAddTask(text){
  setProjectsState(prevState => {
      const taskId = Math.random();
      const newTask = {
        text: text,
        projectId: prevState.selectedProjectId,
        id: taskId
      }
      return{
        ...prevState,
        tasks: [newTask, ...prevState.tasks]
      };
    })
}

function handleDeleteTask(id) {
  setProjectsState(prevState => {
      return{
        ...prevState,
        tasks: prevState.tasks.filter((task) => task.id !== id)
      };
    });
}

  function handleStartAddProject() {
    setProjectsState(prevState => {
      return {
        ...prevState,
        selectedProjectId: null,
      };
    });
  }

function handleSelectProject(id){
setProjectsState(prevState => {
      return{
        ...prevState,
        selectedProjectId: id
      };
    });
}

  function handleCancel(){
    setProjectsState(prevState => {
      return{
        ...prevState,
        selectedProjectId: undefined
      };
    });
  }
  
  function handleProjectDelete() {
    setProjectsState(prevState => {
      return{
        ...prevState,
        selectedProjectId: undefined,
        projects: prevState.projects.filter((project) => project.id !== prevState.selectedProjectId)
      };
    });
  }

  function handleAddProject(projectData){
    setProjectsState(prevState => {
      const projectId = Math.random();
      const newProject = {
        ...projectData,
        id: projectId
      }
      return{
        ...prevState,
        projects: [...prevState.projects, newProject],
        selectedProjectId: undefined
      };
    })
  }

  console.log(projectsState);
  
  //find an element in an array by ID below:
  const selectedProject = projectsState.projects.find(project=>project.id === projectsState.selectedProjectId);
  let content = <SelectedProject 
   onDelete={handleProjectDelete} 
   project={selectedProject}
   onAddTask={handleAddTask}
   onDeleteTask={handleDeleteTask}
   tasks={projectsState.tasks}
   />;

  if(projectsState.selectedProjectId===null){
    content= <NewProject hanCan={handleCancel} onAdd={handleAddProject}/>
  } else if(projectsState.selectedProjectId===undefined) content = <NoProjectSelected onStartAddProject={handleStartAddProject}/>
  return (
    <main className='h-screen my-8 flex gap-8'>
      <ProjectsSidebar 
      projects={projectsState.projects} 
      onStartAddProject={handleStartAddProject}
      onSelectProject={handleSelectProject}
      selectedProjectId={projectsState.selectedProjectId}
      />
      {content}
    </main>
  )
}

export default App

<?php

namespace App\repositories;

use App\interfaces\CrudInterface;
use App\Models\Project;
use Illuminate\Http\Request;

class ProjectRepository implements CrudInterface
{

    public function getAll(){
        $projects = Project::withCount('tasks')->orderBy('id', 'desc')->get();
        return $projects;
    }

    public function findById($id){
        $projects = Project::with('tasks')->find($id);
        return $projects;
    }

    public function create(Request $request){

        $project = new Project();

        $project->user_id = $request->user_id;
        $project->name = $request->name;
        $project->description = $request->description;        
        $project->save();

        return $project;
    }

    public function edit(Request $request, $id){

        $project = $this->findById($id);

        $project->user_id = $request->user_id;
        $project->name = $request->name;
        $project->description = $request->description;
        $project->status = $request->status;
        $project->save();
        
        return $project;
    }

    public function delete($id){
        
        $project = $this->findById($id);
        $project->tasks()->delete();
        $project->delete();
        return $project;
    }
}
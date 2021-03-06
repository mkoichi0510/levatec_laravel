<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Chat extends Model
{
    use SoftDeletes;
    
    /*protected $fillable = [
        'title',
        'name',
    ];*/
    
    public function getByLimit(int $limit_count = 10)
    {
        return $this->orderBy('updated_at', 'DESC')->limit($limit_count)->get();
    }
    
    public function getPaginateByLimit(int $limit_count = 10)
    {
        return $this->orderBy('updated_at', 'DESC')->paginate($limit_count);
        //return $this->paginate($limit_count);
    }
    
    public function address(){
        return $this->hasOne('App\Address');
    }
    
    public function index(Chat $post)
    {
        return $post->get();
    }
}

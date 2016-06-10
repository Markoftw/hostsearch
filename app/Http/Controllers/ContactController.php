<?php

namespace App\Http\Controllers;

use App\Contact;
use Illuminate\Http\Request;

use App\Http\Requests;

class ContactController extends Controller
{

    /**
     * Storing a contact message (about page)
     * @param Request $request
     * @return mixed
     */
    public function store(Request $request)
    {
        $this->validate($request, [
            'first_name'    => 'required|max:45',
            'email'    => 'required|email',
            'message'    => "required|max:255"
        ]);

        $message = Contact::create($request->all());
        
        if($message) {
            return response()->success(true);
        }
        
        return response()->error(true);
    }

}

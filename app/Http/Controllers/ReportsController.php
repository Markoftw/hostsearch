<?php

namespace App\Http\Controllers;

use App\Report;
use Illuminate\Http\Request;
use App\Http\Requests;

class ReportsController extends Controller
{
    /*
     * 0 = no errors
     * 1 = price mismatch
     * 2 = no longer exists
     * 4 = wrong company
     * 8 = ...
     */
    
    
    public function store(Request $request, $server_type, $server_id)
    {
        $reports = 0;
        if($request->get('price')) $reports += 1;
        if($request->get('available')) $reports += 2;
        if($request->get('company')) $reports += 4;
        $message = $request->get('message');

        if($reports == 0 && empty($message)){
            return response()->error('Select at least one problem or describe it!', 422);
        }

        $report = Report::create([
            'server_id'     => $server_id,
            'server_type'   => $server_type,
            'errors'        => $reports,
            'message'       => $message
        ]);

        if($report){
            return response()->success(true);
        }

        return response()->error('Report could not be sent!', 422);
    }

    public function show()
    {

    }

    public function showAll()
    {

    }

    public function markAsRead(Report $server)
    {

    }

    public function markAsSolved(Report $server)
    {

    }
}

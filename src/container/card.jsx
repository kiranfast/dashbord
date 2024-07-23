import React from 'react'

function card({data}) {

    const {title,price,icon,color,isProgress} = data
  return <>
         {/* <!-- Earnings (Monthly) Card Example --> */}
         <div class="col-xl-3 col-md-6 mb-4">
         <div class={`card border-left-${color} shadow h-100 py-2`}>
                                <div class="card-body">
                                    <div class="row no-gutters align-items-center">
                                        {
                                            isProgress?<>
                                            <div class="col mr-2">
                                            <div class="text-xs font-weight-bold text-info text-uppercase mb-1">{title}
                                            </div>
                                            <div class="row no-gutters align-items-center">
                                                <div class="col-auto">
                                                    <div class="h5 mb-0 mr-3 font-weight-bold text-gray-800">{price}</div>
                                                </div>
                                                <div class="col">
                                                    <div class="progress progress-sm mr-2">
                                                        <div class={`progress-bar bg-${color}`} role="progressbar"
                                                            style={{width: `${price}`, ariaValueNow:"50", ariaValueMin:"0",
                                                            ariaValueMax:"100"}}></div>
                                                    </div>
                                                </div>
                                            </div>
                                            </div>
 
                                            </>:
                                            <>
                                            <div class="col mr-2">
                                            <div class={`text-xs font-weight-bold text-${color} text-uppercase mb-1`}>
                                                {title}</div>
                                            <div class="h5 mb-0 font-weight-bold text-gray-800">{price}</div>
                                        </div> 
                                            </>

                                        }
                                        <div class="col-auto">
                                            <i class={`fas ${icon} fa-2x text-gray-300`}></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
{/* 
                        <!-- Earnings (Monthly) Card Example -->
                        <div class="col-xl-3 col-md-6 mb-4">
                            <div class="card border-left-success shadow h-100 py-2">
                                <div class="card-body">
                                    <div class="row no-gutters align-items-center">
                                        <div class="col mr-2">
                                            <div class="text-xs font-weight-bold text-success text-uppercase mb-1">
                                                Earnings (Annual)</div>
                                            <div class="h5 mb-0 font-weight-bold text-gray-800">$215,000</div>
                                        </div>
                                        <div class="col-auto">
                                            <i class="fas fa-dollar-sign fa-2x text-gray-300"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* <!-- Earnings (Monthly) Card Example --> 
                        <div class="col-xl-3 col-md-6 mb-4">
                            <div class="card border-left-info shadow h-100 py-2">
                                <div class="card-body">
                                    <div class="row no-gutters align-items-center">
                                        <div class="col mr-2">
                                            <div class="text-xs font-weight-bold text-info text-uppercase mb-1">Tasks
                                            </div>
                                            <div class="row no-gutters align-items-center">
                                                <div class="col-auto">
                                                    <div class="h5 mb-0 mr-3 font-weight-bold text-gray-800">50%</div>
                                                </div>
                                                <div class="col">
                                                    <div class="progress progress-sm mr-2">
                                                        <div class="progress-bar bg-info" role="progressbar"
                                                            style={{width: "50%", ariaValueNow:"50", ariaValueMin:"0",
                                                            ariaValueMax:"100"}}></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-auto">
                                            <i class="fas fa-clipboard-list fa-2x text-gray-300"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* <!-- Pending Requests Card Example --> 
                        <div class="col-xl-3 col-md-6 mb-4">
                            <div class="card border-left-warning shadow h-100 py-2">
                                <div class="card-body">
                                    <div class="row no-gutters align-items-center">
                                        <div class="col mr-2">
                                            <div class="text-xs font-weight-bold text-warning text-uppercase mb-1">
                                                Pending Requests</div>
                                            <div class="h5 mb-0 font-weight-bold text-gray-800">18</div>
                                        </div>
                                        <div class="col-auto">
                                            <i class="fas fa-comments fa-2x text-gray-300"></i>
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                        
  
  </>
}

export default card

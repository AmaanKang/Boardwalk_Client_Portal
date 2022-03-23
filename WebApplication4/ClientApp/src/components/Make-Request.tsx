﻿import * as React from 'react';
import { connect } from 'react-redux';
import Sidebarmr from './Sidebarmr';
import './form.css';

class MakeRequest extends React.Component {
    public render() {
       
  
        return (
            < React.Fragment >
                <div className='row'>
                    <div className='col-4'>
                        <Sidebarmr />
                    </div>
                
                <div className='col-8' id='mr1add'>
                    
                    <h1>Request Insurance Certificate</h1>
                    <form>
                            <label> Name </label>&nbsp;&nbsp;&nbsp;
                        <input  type='text' placeholder='Name' />
                        <br /><br />
                        <label> Address </label>
                        <input type='text' placeholder='address' />
                        <br /><br />
                        <label> Province </label>
                        <select>
                            <option value="ON">ON</option>
                            <option value="BC">BC</option>
                            <option value="AL">AL</option>
                            <option value="NL">NL</option>
                            <option value="PE">PE</option>
                            <option value="NS">NS</option>
                            <option value="NB">NB</option>
                            <option value="QC">QC</option>
                            <option value="MB">MB</option>
                            <option value="SK">SK</option>
                            <option value="AB">AB</option>
                            <option value="YT">YT</option>
                            <option value="NT">NT</option>
                            <option value="NU">NU</option>

                        </select>

                        <br /><br />
                        <label> City </label>
                        <input type='text' placeholder='CITY' />
                        <br /><br />
                        <label> Postal Code </label>
                        <input type='text' placeholder='Postal Code' />
                        <br /><br />
                       

                        <input type='submit' value='submit' />
                    </form>
                    <br />
                   
                    </div>
                </div>
                
            </React.Fragment>
        );
    }
};
export default connect()(MakeRequest);






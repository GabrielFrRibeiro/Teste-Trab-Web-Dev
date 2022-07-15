// Made by
// Guilherme Vendruscolo        11796614
// Gabriel Francisco Ribeiro    11857302

import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

const mainAppRoot = ReactDOM.createRoot(document.getElementById('root'));

let formsElements = null;
let buttonsToRender = [<button onClick={() => showFormsFields(1)} id="ng-button">Adicionar disciplina</button>, <button onClick={() => showFormsFields(3)} id="rf-button">Registrar faltas</button>, <></>]
let addedGrades = [];
let rows = [];
let numberOfAddedGrades = 0;
let currentlyAddingCredits = 2;

//component function of the mainTable
function MainTable()
{
    return (
        <table id="main-table">
            <thead id="mthead">
                <tr id="days">
                    <th></th>
                    <th>SEGUNDA</th>
                    <th>TERÇA</th>
                    <th>QUARTA</th>
                    <th>QUINTA</th>
                    <th>SEXTA</th>
                    <th>SABADO</th>
                    <th>DOMINGO</th>
                </tr>
            </thead>
            <tbody id="mtbody">
                <tr id="08h">
                    <th>08h</th>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr id="10h">
                    <th>10h</th>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>  
                <tr id="12h">
                    <th>12h</th>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr id="14h">
                    <th>14h</th>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>  
                <tr id="16h">
                    <th>16h</th>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr> 
                <tr id="18h">
                    <th>18h</th>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr> 
                <tr id="20h">
                    <th>20h</th>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr> 
                <tr id="22h">
                    <th>22h</th>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
            </tbody> 
        </table>
    )
}

//component function to render the faults table
function FaultsTable()
{
    return (
        <table id="secondary-table">
            <thead id="sthead">
                <tr id="st-tr">
                    <th className="empty-st-th"></th>
                    <th className="st-th">Faltas computadas</th>
                    <th className="st-th">Total permitido de faltas</th>
                    <th className="st-th">Faltas restantes</th>
                </tr>
            </thead>
            <tbody className="st-body">
                {rows == []? null : rows}
            </tbody>
        </table>
    )
}

//function to re-render things on screen after all updates have been made
function updateRendering(firstbuttonid=0, secondbuttonid=1, hideForms = false)
{
    if(hideForms) formsElements = null
    
    mainAppRoot.render(
        <div id='app-container'>
            <div id="title-container">
                <h1>WEEK PLANNER</h1>
            </div>
            <div id="table-container">
                <div id="main-table-container">
                    <MainTable/>
                </div>
                <div id='second-table-container'>
                    <FaultsTable/>
                </div>
            </div>
            <div id="forms-container">
                {formsElements != null && formsElements}
            </div>
            <div id="buttons-container">
                <div id='ng-button-container'>
                    {buttonsToRender[firstbuttonid]}
                </div>
                <div id='rf-button-container'>
                    {buttonsToRender[secondbuttonid]}
                </div>
            </div>
        </div>
    )
}

//function to update what the formulary field will render
function showFormsFields(formsStep) 
{
    if(formsStep == 1)
    {
        formsElements = (
        <div id="gradeforms1">
            <label>Numero de creditos da disciplina</label>
            <p><select id="credits-input">
                <option value= "2">2</option>
                <option value= "4">4</option>
            </select>
            </p>
            <p><button onClick={saveCredits}>Continuar</button></p>
        </div>
        )

        updateRendering(2, 2)
    }

    else if(formsStep == 2) 
    {
        formsElements = (
        <div id="gradeforms2">
            <label>Nome da matéria</label>
            <p><input id="name-input" type="text" required={true}/></p>
            <label>Dia</label>
            <p><select id="1st-day-input" required={true}>
                <option value="1">Segunda</option>
                <option value="2">Terça</option>
                <option value="3">Quarta</option>
                <option value="4">Quinta</option>
                <option value="5">Sexta</option>
                <option value="6">Sabado</option>
                <option value="7">Domingo</option>  
            </select>
            </p>
            <label>Horario de inicio</label>
            <p><select id="1st-time-input" required={true}>
                <option value="08">08h</option>
                <option value="10">10h</option>
                <option value="12">12h</option>
                <option value="14">14h</option>
                <option value="16">16h</option>
                <option value="18">18h</option>
                <option value="20">20h</option>
                <option value="22">22h</option>    
            </select></p>
            {currentlyAddingCredits == 2? null : (
                <div>
                    <label>Dia</label>
                    <p><select id="2nd-day-input" required={true}>
                        <option value="1">Segunda</option>
                        <option value="2">Terça</option>
                        <option value="3">Quarta</option>
                        <option value="4">Quinta</option>
                        <option value="5">Sexta</option>
                        <option value="6">Sabado</option>
                        <option value="7">Domingo</option>  
                    </select>
                    </p>
                    <label>Horario de inicio</label>
                    <p><select id="2nd-time-input" required={true}>
                        <option value="08">08h</option>
                        <option value="10">10h</option>
                        <option value="12">12h</option>
                        <option value="14">14h</option>
                        <option value="16">16h</option>
                        <option value="18">18h</option>
                        <option value="20">20h</option>
                        <option value="22">22h</option>    
                    </select>
                    </p>
                </div>
            )}
            <button onClick={saveGradesAndUnrenderF} id="save-grade-button">Adicionar</button>
        </div>)

        updateRendering(2, 2)
    }
    
    else if(formsStep == 3 && addedGrades.length != 0)
    {
        var gradesNames = []
        for(var i = 0; i < addedGrades.length; i++)
           gradesNames.push(<option value={i}>{addedGrades[i].name}</option>)
        
        
        formsElements= (
            <div id="faultsforms">
                <label>Materia</label>
                <p><select id="gradeToAddFault">
                    {gradesNames}
                </select>
                </p>
                <label>Numero de faltas</label>
                <p><input id="nfaults" type="number" /></p>
                <button onClick={() => updateFaults(document.getElementById("nfaults").value, document.getElementById("gradeToAddFault").value)} id="save-faults-button">Registrar faltas</button>
            </div>)
        
        updateRendering(2, 2)
    }
}

//function to update the variable currentlyAddingCredits
function saveCredits() 
{
    currentlyAddingCredits = document.getElementById("credits-input").value;
    console.log("creditos: " + currentlyAddingCredits)
    showFormsFields(2);
}

//function to save the latest added grade and to unrender the rendered formulary
function saveGradesAndUnrenderF()
{
    addedGrades.push(
    {
        name: document.getElementById("name-input").value,
        credits: currentlyAddingCredits,
        days: [document.getElementById("1st-day-input").value, (currentlyAddingCredits == 2? null : document.getElementById("2nd-day-input").value)],
        time: [document.getElementById("1st-time-input").value, (currentlyAddingCredits == 2? null : document.getElementById("2nd-time-input").value)],
        faults: 0,
        totalFaultsAllowed: 10
    }
    )

    var row1 = document.getElementById(addedGrades[numberOfAddedGrades].time[0] + "h");
    
    if(addedGrades[numberOfAddedGrades].time[1] !== null) 
        var row2 =  document.getElementById(addedGrades[numberOfAddedGrades].time[1] + "h")

    var column = addedGrades[numberOfAddedGrades].days;
    
    row1.children[column[0]].innerText = addedGrades[numberOfAddedGrades].name;
    if(column[1] !== null)
    {
        row2.children[column[1]].innerText = addedGrades[numberOfAddedGrades].name;
    }

    numberOfAddedGrades++;

    addGradesToFaultTable();
    updateRendering(0, 1, true)
    
}

//function to add a new grade to the fault table
let k = 0
function addGradesToFaultTable()
{

    var lastAddedGrade = addedGrades[numberOfAddedGrades-1];
    var newGrade = (
        <tr className="st-tr" key={k}>
            <th>{lastAddedGrade.name}</th>
            <td className="st-td">{lastAddedGrade.faults}</td>
            <td className="st-td">{lastAddedGrade.totalFaultsAllowed}</td>
            <td className="st-td">{lastAddedGrade.totalFaultsAllowed-lastAddedGrade.faults}</td>
        </tr>
    )
    
    rows.push(newGrade)
    updateRendering(0, 1)
    console.log(rows)
    k++;
}

//function to update the faults on the fault table
function updateFaults(nFaults, gradeId)
{
    console.log("gradeId " + gradeId + " \ngrade \n" + rows[gradeId] + "\nrows " + rows)
    addedGrades[gradeId].faults += parseInt(nFaults)
    
    rows[gradeId] = (
        <tr className="st-tr" key={gradeId}>
            <th>{addedGrades[gradeId].name}</th>
            <td className="st-td">{addedGrades[gradeId].faults}</td>
            <td className="st-td">{addedGrades[gradeId].totalFaultsAllowed}</td>
            <td className="st-td">{addedGrades[gradeId].totalFaultsAllowed-addedGrades[gradeId].faults}</td>
        </tr>
    )

    
    updateRendering(0, 1, true)
}


updateRendering(0, 1);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();



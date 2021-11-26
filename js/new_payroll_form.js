//Uc-2 for pay roll () Set eventlistener when document is loaded 
window.addEventListener('DOMContentLoaded',(event)=>
{
    const name=document.querySelector("#name");
    const textError = document.querySelector(".text-error");
    name.addEventListener('input', function () 
    {
        if(name.value.length == 0)
        {
            textError.textContent ="";
            return;
        }
        try
        {
            (new EmployeePayrollData()).name=name.value;
            textError.textContent ="";
        }
        catch(ex)
        {
            textError.textContent =ex;
        }
    });

    const salary = document.querySelector("#salary");
    const output = document.querySelector("#salary-output");
    output.textContent = salary.value;
    salary.addEventListener("input", function () {
    output.textContent = salary.value;
    });
});
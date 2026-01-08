function CheckPerfect(no)
{
    let iCnt = 0;
    for(iCnt = 1 ;iCnt <=(no/2) ;iCnt++)
   {
    if((no % iCnt)==0)
    {
        iSum = iSum + iCnt ;

    }
    if(iSum == no)
    {
        return true;
    }
    else
    {
        return false;
    }
    
   }
}

function main()
{
   let iValue = 10;
   
   let bRet = false;
   bRet = CheckPerfect(iValue);

   if(bRet == true)
   {
    console.log(`${iValue} is  a perefect number`);
   }
   else
   {
    console.log(`${iValue} is  not perefect number`)

   }

}

main();
{Project Name} & " $" &
IF(LEN(Project_Cost_Rollup_String) >= 4, 
LEFT({Project_Cost_Rollup_String}, 
    LEN({Project_Cost_Rollup_String}) - 3) 
    & "," & 
RIGHT({Project_Cost_Rollup_String}, 3), {Project_Cost_Rollup_String})
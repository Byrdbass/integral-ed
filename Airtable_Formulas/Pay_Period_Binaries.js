//2_Pay_Periods_Ago - OLD
IF(
  AND(Aging_Days_PP_Start >= 31, 
    Aging_Days_PP_Start<=46), 
  "1", "0")

//Previous_Pay_Period - updated 02/15/2024 

//Previous_Pay_Period -OLD
IF(
    AND(
      Aging_Days_PP_Start > 15,      
      Aging_Days_PP_Start <= 30), 
    "1", "0")

//Pay_Period_Current
IF(
    //when pay period is from the 1st to the 15th of the month
    AND(
      DAY({Today Central Time}) <= 15,
      DAY(Pay_Period_Starting) <= 15, 
      MONTH({Today Central Time}) = MONTH(Pay_Period_Starting),
      YEAR({Today Central Time}) = YEAR(Pay_Period_Starting)
    ),
    "1",
    IF(
      AND(
        DAY({Today Central Time}) > 15,
        DAY(Pay_Period_Starting) > 15,
        MONTH({Today Central Time}) = MONTH(Pay_Period_Starting),
        YEAR({Today Central Time}) = YEAR(Pay_Period_Starting)
      ),
      "1",
      "0"
    )
  )

//Pay_Period_Current_copy
IF(
    AND(
      DAY(TODAY()) <= 15,
      DAY(Pay_Period_Starting) <= 15, 
      MONTH(TODAY()) = MONTH(Pay_Period_Starting),
     YEAR(TODAY()) = YEAR(Pay_Period_Starting)
    ),
    "1",
    IF(
      AND(
        DAY(TODAY()) > 15,
        DAY(Pay_Period_Starting) > 15,
        MONTH(TODAY()) = MONTH(Pay_Period_Starting),
        YEAR(TODAY()) = YEAR(Pay_Period_Starting)
      ),
      "1",
      "0"
    )
  )

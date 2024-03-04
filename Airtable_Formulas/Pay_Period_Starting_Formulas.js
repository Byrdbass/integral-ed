// Pay_Period_Starting_Old - changed 02/09/2024
DATETIME_FORMAT(
  DATETIME_PARSE(
      IF(
        DAY(Date_of_Entry) <= 15,     
        DATETIME_FORMAT(Date_of_Entry, 'MM') & "/01/" & YEAR(Date_of_Entry),
        DATETIME_FORMAT(Date_of_Entry, 'MM') & "/16/" & YEAR(Date_of_Entry)
    ), 'MM/DD/YYYY'
  ), 'MM/DD/YYYY'
)

// Pay_Period_Starting - changed 02/09/2024
DATETIME_FORMAT(
  DATETIME_PARSE(
      IF(
        DAY(Date_of_Entry_Central_Time) <= 15,     
        DATETIME_FORMAT(Date_of_Entry_Central_Time, 'MM') & "/01/" & YEAR(Date_of_Entry_Central_Time),
        DATETIME_FORMAT(Date_of_Entry_Central_Time, 'MM') & "/16/" & YEAR(Date_of_Entry_Central_Time)
    ), 'MM/DD/YYYY'
  ), 'MM/DD/YYYY'
)
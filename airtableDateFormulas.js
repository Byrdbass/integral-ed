DATETIME_PARSE(
    (WEEKNUM(local_date) - 1) * 7 + 
        DATETIME_FORMAT( //formats to extract day
            DATETIME_PARSE( //makes a date object
                CONCATENATE( //makes a string
                    "1/1/", 
                        YEAR(local_date) //year from local date
                ), 
            "M/D/YYYY"), // formats the parsed date
        'D'),
'D'
)

CONCATENATE(DATETIME_FORMAT(DATEADD(local_date,-DATETIME_FORMAT(local_date,'e'),'days'),'M/D'))

IF(
    AND(
      DATETIME_DIFF(
        DATEADD(local_date, -DATETIME_FORMAT(local_date, 'e') + 1, 'days'),
        local_date,
        'days'
      ) >= 0,
      DATETIME_DIFF(
        local_date,
        DATEADD(local_date, -DATETIME_FORMAT(local_date, 'e') + 16, 'days'),
        'days'
      ) <= 0
    ),
    DATETIME_FORMAT(local_date, 'MMMM') & " 1st-15th",
    DATETIME_FORMAT(local_date, 'MMMM') & " 16th-end"
  )

IF(
    DAY(local_date) <= 15,     
    DATETIME_FORMAT(local_date, 'MMMM') & " 1st-15th",
    DATETIME_FORMAT(local_date, 'MMMM') & " 16th-end"
)
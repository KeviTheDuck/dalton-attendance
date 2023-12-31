from utils.get_initials import get_initials

def id_generator(stream:str, roll_number:int, name:str, year1:int, year2:int):
    """
    Takes stream and name as string parameters and roll number,year1 and year2 as integer.
    student is is generated by taking the initial word of the stream and adding the roll number as string
    and then name and then finally the academic year duration.

    Example:
        >>>id_generator('arts',69,'Shreya Bhadra',2023,2024)
        'A69SB20232024'
    """
    student_id = get_initials(stream) + str(roll_number)+ get_initials(name) + str(year1)+ str(year2)
    return student_id
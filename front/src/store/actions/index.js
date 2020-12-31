import {

    HTTP_401_ERROR,

    HTTP_404_ERROR,

    HTTP_500_ERROR,

    HTTP_OTHER_ERROR,

    SHOW_FULLLOADER, 
    
    UPDATE_DRIVER,

} from '../actionTypes';


/** UI actions */

export const showFullLoader = (data) => {

    return { type: SHOW_FULLLOADER, payload: data };
}



/** User management actions */

export const updateDriver = (data) => {

    return { type: UPDATE_DRIVER, payload: data };
}


/** HTTP error handler actions */
export const excute401ErrorHandler = (error) => {

    return { type: HTTP_401_ERROR, error: error };
}


export const excute404ErrorHandler = (error) => {

    return { type: HTTP_404_ERROR, error: error };
}


export const excute500ErrorHandler = (error) => {

    return { type: HTTP_500_ERROR, error: error };
}


export const excuteOtherErrorHandler = (error) => {

    return { type: HTTP_OTHER_ERROR, error: error };
}


export const handleHTTPError = (error) => {

    if (error.status === 401) 

        return excute401ErrorHandler(error)

    else if (error.status === 404) 

        return excute404ErrorHandler(error)
    
    else if (error.status === 500) 

        return excute500ErrorHandler(error)

    else     
        return excuteOtherErrorHandler(error)    
}
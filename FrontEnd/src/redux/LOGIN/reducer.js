


export const LoginPSUpassport=(information=[],action)=>{
    switch(action.type){
        case 'LOGIN':
            return [...information, action.information];
        default: return information
    }
}
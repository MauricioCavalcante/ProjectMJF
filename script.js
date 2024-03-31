// script mascaramento do número do whatsapp -----------------------------------------------------


var selectedId = '31'; // Variável global para armazenar o ID

document.addEventListener('DOMContentLoaded', function () {
    var selectElement = document.getElementById('country');
    var spanElement = document.getElementById('ddi');
    var spanPais = document.getElementById('spanPais');

    // Função que altera a mascara do numero de telefone--------------------------------
    function formatPhone() {
        //FORMATO-CODIGO 1 ----------------------------------------------------------------------
        if (selectedId === '1') {
            if (document.getElementById('floatingWpp')){
                var inputPhone = document.getElementById('floatingWpp');
                var valor = inputPhone.value.replace(/\D/g, ''); // Remove caracteres não numéricos
                if (valor.length > 0) {                
                    if (valor.length > 0) {                
                        if (valor.length < 2) {format = valor.substring(0, 1);
                        } else {format = valor.substring(0, 1) + ' ';}
                        if (valor.length > 1) {if (valor.length < 4) {format += valor.substring(1, 3);
                            } else { format += valor.substring(1, 3) + ' ';}
                            if (valor.length < 6) { format += valor.substring(3, 5);
                            } else {format += valor.substring(3, 5) + ' ';}
                            if (valor.length < 8) {format += valor.substring(5, 7);
                            } else {format += valor.substring(5, 7) + ' ';}
                            if (valor.length > 6) {format += valor.substring(7, 9);
                            } else {format += valor.substring(9);}
                        } else {format += valor.substring(1);}
                    
                        inputPhone.value = format;
                    }
                };
            };
        };
        //FORMATO-CODIGO 2 ----------------------------------------------------------------------
        if (selectedId === '2') {
            if (document.getElementById('floatingWpp')){
                var inputPhone = document.getElementById('floatingWpp');
                var valor = inputPhone.value.replace(/\D/g, ''); // Remove caracteres não numéricos
                if (valor.length > 0) {                
                    if (valor.length > 0) {                
                        if (valor.length < 2) {format = valor.substring(0, 1);
                        } else {format = valor.substring(0, 1) + ' ';}
                        if (valor.length > 1) {
                            if (valor.length < 6) {format += valor.substring(1, 5);
                            } else {format += valor.substring(1, 5) + ' ';}
                            if (valor.length > 5) {format += valor.substring(5, 9);
                            } else {format += valor.substring(9);}
                        } else {format += valor.substring(1);}
                    
                        inputPhone.value = format;
                    }
                };
            };
        };
        //FORMATO-CODIGO 3----------------------------------------------------------------------
        if (selectedId === '3') {
            if (document.getElementById('floatingWpp')){
                var inputPhone = document.getElementById('floatingWpp');
                var valor = inputPhone.value.replace(/\D/g, ''); // Remove caracteres não numéricos
                if (valor.length > 0) {                
                    if (valor.length > 0) {                
                        if (valor.length < 3) {format = valor.substring(0, 2);
                        } else {format = valor.substring(0, 2) + ' ';}
                        if (valor.length > 2) {if (valor.length < 5) {format += valor.substring(2, 4);
                            } else { format += valor.substring(2, 4) + ' ';}
                            if (valor.length > 4) { format += valor.substring(4, 6);
                            } else {format += valor.substring(6);}
                        } else {format += valor.substring(2);}
                    
                        inputPhone.value = format;
                    }
                };
            };
        };
        //FORMATO-CODIGO 4----------------------------------------------------------------------
        if (selectedId === '4') {
            if (document.getElementById('floatingWpp')){
                var inputPhone = document.getElementById('floatingWpp');
                var valor = inputPhone.value.replace(/\D/g, ''); // Remove caracteres não numéricos
                if (valor.length > 0) {                
                    if (valor.length > 0) {                
                        if (valor.length < 3) {format = valor.substring(0, 2);
                        } else {format = valor.substring(0, 2) + ' ';}
                        if (valor.length > 2) {if (valor.length < 5) {format += valor.substring(2, 4);
                            } else { format += valor.substring(2, 4) + ' ';}
                            if (valor.length < 7) { format += valor.substring(4, 6);
                            } else {format += valor.substring(4, 6) + ' ';}
                            if (valor.length > 4) {format += valor.substring(6, 8);
                            } else {format += valor.substring(8);}
                        } else {format += valor.substring(2);}
                    
                        inputPhone.value = format;
                    }
                };
            };
        };
        //FORMATO-CODIGO 5 ----------------------------------------------------------------------
        if (selectedId === '5') {
            if (document.getElementById('floatingWpp')){
                var inputPhone = document.getElementById('floatingWpp');
                var valor = inputPhone.value.replace(/\D/g, ''); // Remove caracteres não numéricos
                if (valor.length > 0) {                
                    if (valor.length > 0) {                
                        if (valor.length < 3) {format = valor.substring(0, 2);
                        } else {format = valor.substring(0, 2) + ' ';}
                        if (valor.length > 2) {if (valor.length < 5) {format += valor.substring(2, 4);
                            } else {format += valor.substring(2, 4) + ' ';}
                            if (valor.length > 4) {format += valor.substring(4, 9);
                            } else {format += valor.substring(9);}
                        } else {format += valor.substring(2);}
                    
                        inputPhone.value = format;
                    }
                };
            };
        };
        //FORMATO-CODIGO 6 ----------------------------------------------------------------------
        if (selectedId === '6') {
            if (document.getElementById('floatingWpp')){
                var inputPhone = document.getElementById('floatingWpp');
                var valor = inputPhone.value.replace(/\D/g, ''); // Remove caracteres não numéricos
                if (valor.length > 0) {                
                    if (valor.length > 0) {                
                        if (valor.length < 3) { format = valor.substring(0, 2);
                        } else {format = valor.substring(0, 2) + ' ';}
                        if (valor.length > 2) {
                            if (valor.length < 6) {format += valor.substring(2, 5);
                            } else {format += valor.substring(2, 5) + ' ';}
                            if (valor.length < 8) {format += valor.substring(5, 7);
                            } else {format += valor.substring(5, 7) + ' ';}
                            if (valor.length > 7) {format += valor.substring(7, 9);
                            } else {format += valor.substring(9);}
                        } else {format += valor.substring(2);}
                    
                        inputPhone.value = format;  
                    }
                };
            };
        };
        //FORMATO-CODIGO 7 ----------------------------------------------------------------------
        if (selectedId === '7') {
            if (document.getElementById('floatingWpp')){
                var inputPhone = document.getElementById('floatingWpp');
                var valor = inputPhone.value.replace(/\D/g, ''); // Remove caracteres não numéricos
                if (valor.length > 0) {                
                    if (valor.length > 0) {                
                        if (valor.length < 3) {format = valor.substring(0, 2);
                        } else {format = valor.substring(0, 2) + ' ';}
                        if (valor.length > 2) {if (valor.length < 6) {format += valor.substring(2, 5);
                            } else {format += valor.substring(2, 5) + ' ';}
                            if (valor.length > 5) {format += valor.substring(5, 8);
                            } else {format += valor.substring(8);}
                        } else {format += valor.substring(2);}
                    
                        inputPhone.value = format;
                    }
                };
            };
        };
        //FORMATO-CODIGO 8 ----------------------------------------------------------------------
        if (selectedId === '8') {
            if (document.getElementById('floatingWpp')){
                var inputPhone = document.getElementById('floatingWpp');
                var valor = inputPhone.value.replace(/\D/g, ''); // Remove caracteres não numéricos
                if (valor.length > 0) {                
                    if (valor.length > 0) {                
                        if (valor.length < 3) {format = valor.substring(0, 2);
                        } else {format = valor.substring(0, 2) + ' ';}
                        if (valor.length > 2) {if (valor.length < 6) {format += valor.substring(2, 5);
                            } else {format += valor.substring(2, 5) + ' ';}
                            if (valor.length > 5) {format += valor.substring(5, 9);
                            } else {format += valor.substring(9);}
                        } else {format += valor.substring(2);}
                    
                        inputPhone.value = format;
                    }            
                };
            };
        };
        //FORMATO-CODIGO 9 ----------------------------------------------------------------------
        if (selectedId === '9') {
            if (document.getElementById('floatingWpp')){
                var inputPhone = document.getElementById('floatingWpp');
                var valor = inputPhone.value.replace(/\D/g, ''); // Remove caracteres não numéricos
                if (valor.length > 0) {                
                    if (valor.length > 0) {                
                        if (valor.length < 3) {format = valor.substring(0, 2) ;
                        } else {format = valor.substring(0, 2) + ' ';}
                        if (valor.length > 2) {format += valor.substring(2, 6);
                        } else {format += valor.substring(2);}
                    
                        inputPhone.value = format;
                    }           
                };
            };
        };
        //FORMATO-CODIGO 10 ----------------------------------------------------------------------
        if (selectedId === '10') {
            if (document.getElementById('floatingWpp')){
                var inputPhone = document.getElementById('floatingWpp');
                var valor = inputPhone.value.replace(/\D/g, ''); // Remove caracteres não numéricos
                if (valor.length > 0) {                
                    if (valor.length > 0) {                
                        if (valor.length < 3) {format = valor.substring(0, 2) ; 
                        } else {format = valor.substring(0, 2) + ' ';}
                            
                        if (valor.length > 2) {if (valor.length < 7) {format += valor.substring(2, 6) ;
                            } else {format += valor.substring(2, 6) + ' ';}
                            if (valor.length > 6) {format += valor.substring(6, 9);
                            } else {format += valor.substring(7);}
                        } else {format += valor.substring(2);}
                    
                        inputPhone.value = format;
                    }         
                };
            };
        };
        //FORMATO-CODIGO 11 ----------------------------------------------------------------------
        if (selectedId === '11') {
            if (document.getElementById('floatingWpp')){
                var inputPhone = document.getElementById('floatingWpp');
                var valor = inputPhone.value.replace(/\D/g, ''); // Remove caracteres não numéricos
                if (valor.length > 0) {                
                    if (valor.length > 0) {                
                        if (valor.length < 3) {format = valor.substring(0, 2) ; 
                        } else {format = valor.substring(0, 2) + ' ';}
                            
                        if (valor.length > 2) {if (valor.length < 7) {format += valor.substring(2, 6) ;
                            } else {format += valor.substring(2, 6) + ' ';}
                            if (valor.length > 6) {format += valor.substring(6, 10);
                            } else {format += valor.substring(7);}
                        } else {format += valor.substring(2);}
                    
                        inputPhone.value = format;
                    }         
                };
            };
        };
        //FORMATO-CODIGO 12 ----------------------------------------------------------------------
        if (selectedId === '12') {
            if (document.getElementById('floatingWpp')){
                var inputPhone = document.getElementById('floatingWpp');
                var valor = inputPhone.value.replace(/\D/g, ''); // Remove caracteres não numéricos
                if (valor.length > 0) {                
                    if (valor.length < 3) {format = valor.substring(0, 2) ;
                    } else {format = valor.substring(0, 2) + ' ';}
                    if (valor.length > 2) {format += valor.substring(2, 7) ;
                    } else {format += valor.substring(2);}
                
                    inputPhone.value = format; 
                }
            };
        };
        //FORMATO-CODIGO 13 ----------------------------------------------------------------------
        if (selectedId === '13') {
            if (document.getElementById('floatingWpp')){
                var inputPhone = document.getElementById('floatingWpp');
                var valor = inputPhone.value.replace(/\D/g, ''); // Remove caracteres não numéricos
                if (valor.length > 0) {                
                    if (valor.length < 3) {format = valor.substring(0, 2);
                    } else {format = valor.substring(0, 2) + ' ';}
                    if (valor.length > 2) {format += valor.substring(2, 8) ;
                    } else {format += valor.substring(2);}
                
                    inputPhone.value = format;  
                }
            };
        };
        //FORMATO-CODIGO 14 ----------------------------------------------------------------------
        if (selectedId === '14') {
            if (document.getElementById('floatingWpp')){
                var inputPhone = document.getElementById('floatingWpp');
                var valor = inputPhone.value.replace(/\D/g, ''); // Remove caracteres não numéricos
                if (valor.length > 0) {                
                    if (valor.length < 4) {format = valor.substring(0, 3);
                    } else {format = valor.substring(0, 3) + ' ';}
                    if (valor.length > 3) {if (valor.length < 6) {format += valor.substring(3, 5);       
                        } else {format += valor.substring(3, 5) + ' ';}
                        if (valor.length > 5) {format += valor.substring(5, 7);
                        } else {format += valor.substring(7);}
                    } else {format += valor.substring(3);}
                
                    inputPhone.value = format;
                }
            };
        };
        //FORMATO-CODIGO 15 ----------------------------------------------------------------------
        if (selectedId === '15') {
            if (document.getElementById('floatingWpp')){
                var inputPhone = document.getElementById('floatingWpp');
                var valor = inputPhone.value.replace(/\D/g, ''); // Remove caracteres não numéricos
                if (valor.length > 0) {                
                    if (valor.length < 4) {format = valor.substring(0, 3);
                    } else {format = valor.substring(0, 3) + ' ';}
                    if (valor.length > 2) {if (valor.length < 7) {format += valor.substring(3, 6);       
                        } else {format += valor.substring(3, 6);}
                    } else {format += valor.substring(3);}
                
                    inputPhone.value = format; 
                }
            };
        };
        //FORMATO-CODIGO 16 ----------------------------------------------------------------------
        if (selectedId === '16') {
            if (document.getElementById('floatingWpp')){
                var inputPhone = document.getElementById('floatingWpp');
                var valor = inputPhone.value.replace(/\D/g, ''); // Remove caracteres não numéricos
                if (valor.length > 0) {                
                    if (valor.length < 4) {format = valor.substring(0, 3);
                    } else {format = valor.substring(0, 3) + ' ';}
                    if (valor.length > 2) {if (valor.length < 7) {format += valor.substring(3, 6);       
                        } else {format += valor.substring(3, 6) + ' ';}
                        if (valor.length > 5) {format += valor.substring(6, 9);
                        } else {format += valor.substring(6);}
                    } else {format += valor.substring(3);}
                
                    inputPhone.value = format;
                }
            };
        };
        //FORMATO-CODIGO 17 ----------------------------------------------------------------------
        if (selectedId === '17') {
            if (document.getElementById('floatingWpp')){
                var inputPhone = document.getElementById('floatingWpp');
                var valor = inputPhone.value.replace(/\D/g, ''); // Remove caracteres não numéricos
                if (valor.length > 0) {                
                    if (valor.length < 4) {format = valor.substring(0, 3);
                    } else {format = valor.substring(0, 3) + ' ';}
                    if (valor.length > 2) {if (valor.length < 7) {format += valor.substring(3, 6);       
                        } else {format += valor.substring(3, 6) + ' ';}
                        if (valor.length > 5) {format += valor.substring(6, 10);
                        } else {format += valor.substring(6);}
                    } else {format += valor.substring(3);}
                
                    inputPhone.value = format;
                };
            };
        };
        //FORMATO-CODIGO 18 ----------------------------------------------------------------------
        if (selectedId === '18') {
            if (document.getElementById('floatingWpp')){
                var inputPhone = document.getElementById('floatingWpp');
                var valor = inputPhone.value.replace(/\D/g, ''); // Remove caracteres não numéricos
                if (valor.length > 0) {                
                    if (valor.length < 4) {format = valor.substring(0, 3);
                    } else {format = valor.substring(0, 3) + ' ';}
                    if (valor.length > 2) {if (valor.length < 7) {format += valor.substring(3, 6);       
                        } else {format += valor.substring(3, 7);}
                    } else {format += valor.substring(3);}
                
                    inputPhone.value = format;
                    
                }
            };
        };
        //FORMATO-CODIGO 19 ----------------------------------------------------------------------
        if (selectedId === '19') {
            if (document.getElementById('floatingWpp')){
                var inputPhone = document.getElementById('floatingWpp');
                var valor = inputPhone.value.replace(/\D/g, ''); // Remove caracteres não numéricos
                if (valor.length > 0) {                
                    if (valor.length < 4) {format = valor.substring(0, 3);
                    } else {format = valor.substring(0, 3) + ' ';}
                    if (valor.length > 2) {if (valor.length < 8) {format += valor.substring(3, 7);       
                        } else {format += valor.substring(3, 7) + ' ';}
                        if (valor.length > 6) {format += valor.substring(7, 11);
                        } else {format += valor.substring(7);}
                    } else {format += valor.substring(3);}
                
                    inputPhone.value = format;
                }
            };
        };
        //FORMATO-CODIGO 20 ----------------------------------------------------------------------
        if (selectedId === '20') {
            if (document.getElementById('floatingWpp')){
                var inputPhone = document.getElementById('floatingWpp');
                var valor = inputPhone.value.replace(/\D/g, ''); // Remove caracteres não numéricos
                if (valor.length > 0) {                
                    if (valor.length < 4) {format = valor.substring(0, 3);
                    } else {format = valor.substring(0, 3) + ' ';}
                    if (valor.length > 2) {if (valor.length < 7) {format += valor.substring(3, 6);       
                        } else {format += valor.substring(3, 8);}
                    } else {format += valor.substring(3);}
                
                    inputPhone.value = format; 
                }
            };
        };
        //FORMATO-CODIGO 21 ----------------------------------------------------------------------
        if (selectedId === '21') {
            if (document.getElementById('floatingWpp')){
                var inputPhone = document.getElementById('floatingWpp');
                var valor = inputPhone.value.replace(/\D/g, ''); // Remove caracteres não numéricos
                if (valor.length > 0) {                
                    if (valor.length < 5) {format = valor.substring(0, 4);
                    } else {format = valor.substring(0, 4) + ' ';}
                    if (valor.length > 4) {
                        if (valor.length < 8) { format += valor.substring(4, 7);       
                        } else {format += valor.substring(4, 7) + ' ';}
                        if (valor.length > 7) {format += valor.substring(7, 10);
                        } else { format += valor.substring(7);}
                    } else {format += valor.substring(4);}
                
                    inputPhone.value = format;
                }
            };
        };
        //FORMATO-CODIGO 22 ----------------------------------------------------------------------
        if (selectedId === '22') {
            if (document.getElementById('floatingWpp')){
                var inputPhone = document.getElementById('floatingWpp');
                var valor = inputPhone.value.replace(/\D/g, ''); // Remove caracteres não numéricos
                if (valor.length > 0) {                
                    if (valor.length < 5) {format = valor.substring(0, 4);
                    } else {format = valor.substring(0, 4) + ' ';}
                    if (valor.length > 4) {
                        if (valor.length < 8) { format += valor.substring(4, 7);       
                        } else {format += valor.substring(4, 7) + ' ';}
                        if (valor.length > 7) {format += valor.substring(7, 11);
                        } else { format += valor.substring(7);}
                    } else {format += valor.substring(4);}
                
                    inputPhone.value = format;
                }
            };
        };
        //FORMATO-CODIGO 23 ----------------------------------------------------------------------
        if (selectedId === '23') {
            if (document.getElementById('floatingWpp')){
                var inputPhone = document.getElementById('floatingWpp');
                var valor = inputPhone.value.replace(/\D/g, ''); // Remove caracteres não numéricos
                if (valor.length > 0) {                
                    if (valor.length < 5) {format = valor.substring(0, 4);
                    } else {format = valor.substring(0, 4) + ' ';}
                    if (valor.length > 3) {format += valor.substring(4, 8);  
                    } else {format += valor.substring(4);}
                
                    inputPhone.value = format;
                }
            };
        };
        //FORMATO-CODIGO 24 igual ao codigo 26---------------------------------------------------------
        if (selectedId === '24' || selectedId === '26') {
            if (document.getElementById('floatingWpp')){
                var inputPhone = document.getElementById('floatingWpp');
                var valor = inputPhone.value.replace(/\D/g, ''); // Remove caracteres não numéricos
                if (valor.length > 0) {                
                    if (valor.length < 5) {format = valor.substring(0, 4);
                    } else {format = valor.substring(0, 4) + ' ';}
                    if (valor.length > 3) {format += valor.substring(4, 10);   
                    } else {format += valor.substring(4); }
                
                    inputPhone.value = format;
                }
            };
        };
        //FORMATO-CODIGO 25 ----------------------------------------------------------------------
        if (selectedId === '25') {
            if (document.getElementById('floatingWpp')){
                var inputPhone = document.getElementById('floatingWpp');
                var valor = inputPhone.value.replace(/\D/g, ''); // Remove caracteres não numéricos
                if (valor.length > 0) {                
                    if (valor.length < 6) {format = valor.substring(0, 5);}
                
                    inputPhone.value = format;
                }
            };
        };
        //FORMATO-CODIGO 27 ----------------------------------------------------------------------
        if (selectedId === '27') {
            if (document.getElementById('floatingWpp')){
                var inputPhone = document.getElementById('floatingWpp');
                var valor = inputPhone.value.replace(/\D/g, ''); // Remove caracteres não numéricos
                if (valor.length > 0) {                
                    if (valor.length < 6) {format = valor.substring(0, 5);
                    } else {format = valor.substring(0, 5) + ' ';}
                    if (valor.length > 4) {format += valor.substring(5, 9) ;
                    } else {format += valor.substring(5);}
                
                    inputPhone.value = format;
                }
            };
        };
        //FORMATO-CODIGO 28 ----------------------------------------------------------------------
        if (selectedId === '28') {
            if (document.getElementById('floatingWpp')){
                var inputPhone = document.getElementById('floatingWpp');
                var valor = inputPhone.value.replace(/\D/g, ''); // Remove caracteres não numéricos
                if (valor.length > 0) {                
                    if (valor.length < 4) {format = valor.substring(0, 3);
                    } else {format = valor.substring(0, 3) + '-';}
                    if (valor.length > 2) {if (valor.length < 7) {format += valor.substring(3, 6);       
                        } else {format += valor.substring(3, 7);}
                    } else {format += valor.substring(3);}
                
                    inputPhone.value = format; 
                }
            };
        };
        //FORMATO-CODIGO 29 ----------------------------------------------------------------------
        if (selectedId === '29') {
            if (document.getElementById('floatingWpp')){
                var inputPhone = document.getElementById('floatingWpp');
                var valor = inputPhone.value.replace(/\D/g, ''); // Remove caracteres não numéricos
                if (valor.length > 0) {                
                    if (valor.length < 3) {format = valor.substring(0, 2) ;
                    } else {format = valor.substring(0, 2) + '-';}
                    if (valor.length > 2) {if (valor.length < 6) {format += valor.substring(2, 5) ;
                        } else {format += valor.substring(2, 5) + '-';}
                        if (valor.length > 4) {format += valor.substring(5, 9);
                        } else { format += valor.substring(9);}
                    } else {format += valor.substring(2);}
                
                    inputPhone.value = format;
                }
            };
        };
        //FORMATO-CODIGO 30 -------------------------------------------------
        if (selectedId === '30') {
            if (document.getElementById('floatingWpp')){
                var inputPhone = document.getElementById('floatingWpp');
                var valor = inputPhone.value.replace(/\D/g, ''); // Remove caracteres não numéricos
                if (valor.length > 0) {                
                    if (valor.length < 3) {format = valor.substring(0, 2) ;
                    } else {format = valor.substring(0, 2) + '-';
                    }
                    if (valor.length > 2) {if (valor.length < 7) {format += valor.substring(2, 6) ;
                        } else {format += valor.substring(2, 6) + ' ';}
                        if (valor.length > 6) {format += valor.substring(6, 10);
                        } else { format += valor.substring(7); }
                    } else { format += valor.substring(2);}
                
                    inputPhone.value = format;
                }
            };
        };
        //FORMATO-CODIGO 31 -------------------------------------------------
        if (selectedId === '31') {
            if (document.getElementById('floatingWpp')){
                var inputPhone = document.getElementById('floatingWpp');
                var valor = inputPhone.value.replace(/\D/g, ''); // Remove caracteres não numéricos
                if (valor.length > 0) {                
                    if (valor.length > 0) {                
                        if (valor.length < 3) {format = valor.substring(0, 2) ;
                        } else {format = '(' + valor.substring(0, 2) + ') ';}
                        if (valor.length > 2) {if (valor.length < 8) {format += valor.substring(2, 7);
                            } else {format += valor.substring(2, 7) + '-';}
                            if (valor.length > 7) {format += valor.substring(7, 11);
                            } else {format += valor.substring(7);}
                        } else {format += valor.substring(2);}
                    
                        inputPhone.value = format;
                    }
                };
            };
        };
        //FORMATO-CODIGO 32 -------------------------------------------------
        if (selectedId === '32') {
            if (document.getElementById('floatingWpp')){
                var inputPhone = document.getElementById('floatingWpp');
                var valor = inputPhone.value.replace(/\D/g, ''); // Remove caracteres não numéricos
                if (valor.length > 0) {                
                    if (valor.length < 4) {format = valor.substring(0, 3) ;
                    } else {format = '(' + valor.substring(0, 3) + ') '; }
                    if (valor.length > 3) {if (valor.length < 7) {format += valor.substring(3, 6) ; 
                        } else {format += valor.substring(3, 6) + '-';}
                        if (valor.length > 6) {format += valor.substring(6, 10);            
                        } else {format += valor.substring(6);}
                    } else {format += valor.substring(3);}
                
                    inputPhone.value = format;
                }
            };
        };
        //FORMATO-CODIGO 33 -------------------------------------------------
        if (selectedId === '33') {
            if (document.getElementById('floatingWpp')){
                var inputPhone = document.getElementById('floatingWpp');
                var valor = inputPhone.value.replace(/\D/g, ''); // Remove caracteres não numéricos
                if (valor.length > 0) {                
                    if (valor.length < 3) {format = valor.substring(0, 2);
                    } else {format = valor.substring(0, 2) + ' ';}
                    if (valor.length > 3) {if (valor.length < 6) {format += valor.substring(2, 5);
                        } else { format += valor.substring(2, 5) + '-'; }
                        if (valor.length < 8) { format += valor.substring(5, 7);
                        } else {format += valor.substring(5, 7) + '-';}
                        if (valor.length > 6) {format += valor.substring(7, 9);
                        } else { format += valor.substring(10);}
                    } else { format += valor.substring(2); }
                
                    inputPhone.value = format;
                }
            };
        };
        //FORMATO-CODIGO 34 ----------------------------------------------------
        if (selectedId === '34') {
            if (document.getElementById('floatingWpp')){
                var inputPhone = document.getElementById('floatingWpp');
                var valor = inputPhone.value.replace(/\D/g, ''); // Remove caracteres não numéricos
                if (valor.length > 0) {                
                    if (valor.length > 0) {                
                        if (valor.length < 3) {format = valor.substring(0, 2) ;
                        } else {format = valor.substring(0, 2) + ' ';}
                        if (valor.length > 2) {if (valor.length < 6) {format += valor.substring(2, 6) ;
                            } else {format += valor.substring(2, 6) + '-';}
                            if (valor.length > 6) {format += valor.substring(6, 10);
                            } else {format += valor.substring(7);}
                        } else {format += valor.substring(2);}
                    
                        inputPhone.value = format;
                    };
                };
            };                
        };
        //FORMATO-CODIGO 35 -------------------------------------------------
        if (selectedId === '35') {
            if (document.getElementById('floatingWpp')){
                var inputPhone = document.getElementById('floatingWpp');
                var valor = inputPhone.value.replace(/\D/g, ''); // Remove caracteres não numéricos
                if (valor.length > 0) {                
                    if (valor.length < 4) {format = valor.substring(0, 3) ;
                    } else { format = valor.substring(0, 3) + ' ';}
                    if (valor.length > 2) {if (valor.length < 7) {format += valor.substring(3, 6);
                        } else {format += valor.substring(3, 6) + '-';}
                        if (valor.length < 9) {format += valor.substring(6, 8);
                        } else {format += valor.substring(6, 8) + '-';}
                        if (valor.length > 7) {format += valor.substring(8, 10);
                        } else {format += valor.substring(10);}
                    } else {format += valor.substring(2);}
                
                    inputPhone.value = format; 
                }
            };
        };

    };
    window.onload = function() {
    var inputPhone = document.getElementById('floatingWpp');
    inputPhone.addEventListener('input', formatPhone);
    };

    // Carrega o arquivo CSV com os códigos e formatos dos países
    fetch('DDIs.csv')
        .then(response => response.text())
        .then(text => {
            // Divide o texto do CSV em linhas e remove o cabeçalho
            var linhas = text.split('\n').slice(2);

            // Preenche as opções do select com base no CSV
            linhas.forEach(linha => {
                var [pais, ddi, id] = linha.split(';'); // Divide a linha em colunas
                var option = document.createElement('option');
                option.value = ddi; // O valor da opção é o DDI
                option.textContent = pais; // O texto da opção é o nome do país
                option.dataset.id = id; // Adiciona o ID como um atributo de dados
                selectElement.appendChild(option);
            });

            // Adiciona um ouvinte de eventos para detectar mudanças na seleção
            selectElement.addEventListener('change', function () {
                // Obtém o valor selecionado no select
                var selectedValue = selectElement.value;

                // Obtém o ID do país selecionado
                var selectedOption = selectElement.querySelector('option[value="' + selectedValue + '"]');
                selectedId = selectedOption.dataset.id; // Atualiza a variável global com o ID
                // Atualiza o conteúdo do span com base na seleção
                spanElement.textContent = selectedValue;
                spanPais.textContent = selectedId;

                // Chama a função para alterar o texto
                alterarTexto();
            });
        })
        .catch(error => console.error('Erro ao carregar o arquivo CSV:', error));
});


// script formulário urgência ------------------------------------------------------------------

var radioSim = document.getElementById('opcaoSim');
var radioNao = document.getElementById('opcaoNao');
var caixaTexto = document.getElementById('caixaTexto');
var labelTexto = document.getElementById('textoUrgencia');

radioSim.addEventListener('change', function() {
    if (this.checked) {
    caixaTexto.style.display = 'block'; // Mostra a caixa de texto se "Sim" estiver marcado
    labelTexto.style.display = 'block';
    }
});

radioNao.addEventListener('change', function() {
    if (this.checked) {
    caixaTexto.style.display = 'none'; // Oculta a caixa de texto se "Não" estiver marcado
    labelTexto.style.display = 'none';
    }
});

// script FAQ -------------------------------------------------------------------------------------

document.getElementById('meuFormulario').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    // Envia os dados do formulário para o Web App
    fetch('https://script.google.com/macros/s/AKfycbyOd17l_TIAy0a3Q4ANEEFpVeQHk9gpfySNp6fomMtZP_bYmTItyx43IxVV708Dhh9EJw/exec', {
      method: 'POST',
      body: new FormData(this)
    }).then(response => {
      if (response.ok) {
        alert('Formulário enviado com sucesso!');
        // Limpa o formulário após o envio bem-sucedido (opcional)
        this.reset();
      } else {
        alert('Ocorreu um erro ao enviar o formulário. Por favor, tente novamente.');
      }
    }).catch(error => {
      console.error('Erro ao enviar o formulário:', error);
      alert('Ocorreu um erro ao enviar o formulário. Por favor, tente novamente.');
    });
});
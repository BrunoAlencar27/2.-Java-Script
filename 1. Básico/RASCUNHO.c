//Algoritmo: Projeto Final
//Registro:DevUp
//Data:21/02/25

//BIBLIOTECA
#include <stdio.h>  //Biblioteca padrão
#include <string.h> //Biblioteca para strings
#include <stdlib.h> //Biblioteca para limpar a tela 
#include <unistd.h> //Biblioteca para função de usleep

//CORES
#define RESET   "\033[0m"
#define RED     "\033[1;31m"
#define GREEN   "\033[1;32m"
#define YELLOW  "\033[1;33m"
#define BLUE    "\033[1;34m"
#define CYAN    "\033[1;36m"
#define ORANGE "\033[38;5;214m"

//TRATAMENTO DE TITULO
#define CLEAR_BELOW "\033[J" 
#define MOVE_CURSOR "\033[2;1H"

void titulo(){
    printf(CYAN"---Você está na DevGamers---\n"RESET);
}

void apagaAbaixoTitulo(){
    printf(MOVE_CURSOR CLEAR_BELOW);
}
struct Cadastro{
    char nome[50];
    char email[50];
    char senha[50];  
};

struct Login{
    char email[50];
    char senha[50];
};

struct Jogo{
    char nome[20];
};


int main(){
    struct Jogo jogo[10];
    struct Cadastro cadastro1;
    struct Login login1;
    int login,escolha;
    char resp[2];
    char spinner[]="|/-\\";
    

    //campo do usuário
    char resp0[2];//resposta para voltar ao ambiente de usuário
    char respRemove[20];//resposta para remover mais um jogo
    char nomeJogo[20];
    char NameRemove[50]="Jogo Removido";
    int id=1000; //controla o "Nenhum jogo adicionado ainda"
    int idd=1000;//controla jogo não está na lista


    titulo();
    printf(YELLOW"======Faça seu cadastro=====\n"RESET);
    printf(CYAN"Digite seu nome:"RESET);
    fgets(cadastro1.nome,50,stdin);
    cadastro1.nome[strcspn(cadastro1.nome, "\n")] = '\0';//remove o \n do final da palavra
    printf(CYAN"Digite um email:"RESET);
    fgets(cadastro1.email,50,stdin);
    printf(CYAN"Digite uma senha:"RESET);
    fgets(cadastro1.senha,50,stdin);

    apagaAbaixoTitulo();

    //AMBIENTE DE LOGIN
    printf(YELLOW"======Faça seu Login=====\n"RESET);
    printf(CYAN"Digite seu email:"RESET);
    fgets(login1.email,50,stdin);
    printf(CYAN"Digite sua senha:"RESET);
    fgets(login1.senha,50,stdin);
    
    apagaAbaixoTitulo();
    
    if(strcmp(cadastro1.email,login1.email)==0&&strcmp(cadastro1.senha,login1.senha)==0){
        printf(RED"Carregando..."RESET);
        for(int i=1;i<=20;i++){
            printf("\b%c",spinner[i%4]);//Printa e paga o caracter anterior
            fflush(stdout);//Garante que o caracter seja impresso imediatamente
            usleep(100000);//Pausa de 1000ms(1s)
     	}
        printf("\n");
        printf(GREEN"Login realizado com sucerro!\n"RESET);
        login=1;
    }else{
        printf(RED"Email ou senha incorretos\n"RESET);
    }
    
    printf("Presseione enter para continuar");
    fgets(resp,2,stdin);
    apagaAbaixoTitulo();
    

    //AMBIENTE DO USUÁRIO
    if(login==1){ 
        do{
            printf(YELLOW"=========Ambiente de Usuário=========\n"RESET);
            printf(CYAN"Olá %s, como posso lhe ajudar ?\n"RESET,cadastro1.nome);
            printf(ORANGE"[1]Adicionar jogos\n"RESET);
            printf(ORANGE"[2]Remover jogo  \n"RESET);
            printf(ORANGE"[3]Lista de jogos\n"RESET);
            printf(ORANGE"[4]Sair          \n"RESET);
            printf(CYAN"Escolha:"RESET);
            scanf("%d",&escolha);  
            printf(YELLOW"======================================\n"RESET);
            getchar();
            switch (escolha){
                case 1:
                for(int i=0;i<=9;i++){
                    printf("%iº Jogo\n",i+1);
                    printf("Nome:");
                    fgets(jogo[i].nome,20,stdin);
                    jogo[i].nome[strcspn(jogo[i].nome, "\n")] = '\0';
                    if(i==9){
                        printf("Lista preenchida\n");
                        printf("Deseja voltar para o ambiente de usuário?[S;N]");
                        scanf("%s",resp0);
                        system("clear");
                    }
                }
                 idd=1;
                break;
                case 2:
                if(idd!=1){
                    printf(RED"ERRO:Nenhum jogo adicionado ainda\n"RESET);
                    printf("Deseja voltar ao ambiente de Usuário?[S/N]");
                    scanf("%s",resp0);
                    system("clear");
                    break;
                }else{
                    do{
                        system("clear");
                        printf(CYAN"--Seus jogos---\n"RESET);
                        for(int i=0;i<=9;i++){
                        printf(ORANGE"%s\n"RESET,jogo[i].nome); 
                        }
                        printf(CYAN"---------------"RESET);
                        printf("\n");
                        printf("Nome do jogo que deseja remover:");
                        fgets(nomeJogo,20,stdin);
                        nomeJogo[strcspn(nomeJogo, "\n")] = '\0';
                        for(int i=0;i<=9;i++){
                            if(strcmp(nomeJogo,jogo[i].nome)==0){
                                printf(GREEN"Jogo removido\n"RESET);
                                strcpy(jogo[i].nome,NameRemove);
                                id=2;
                            }
                        }
                        if(id!=2){
                            printf(RED"Jogo não está na lista\n"RESET);

                        }
                        printf("Deseja remover mais algum?[S/N]");
                        scanf("%s",respRemove);
                        getchar();
                        system("clear");

                    }while(strcmp(respRemove,"S")==0||strcmp(respRemove,"s")==0);
                }
                break;
                case 3:
                    if(idd!=1){
                       printf(RED"ERRO:Nenhum jogo adicionado ainda\n"RESET);
                        printf("Deseja voltar ao ambiente de Usuário?[S/N]");
                        scanf("%s",resp0);
                        system("clear");
                        break;
                    }else{
                        system("clear");
                        printf(CYAN"--Seus jogos---\n"RESET);
                        for(int i=0;i<=9;i++){
                            printf(ORANGE"%s\n"RESET,jogo[i].nome); 
                        }
                        printf("Deseja voltar ao ambiente de Usuário?[S/N]");
                        scanf("%s",resp0);
                        system("clear");
                    }
                    break;
                case 4:
                    printf(ORANGE"Obrigado por usufruir dos nossos servícos\n"RESET);
                    printf(ORANGE"Volte sempre jovem Padawan ;)\n"RESET);
                    strcpy(resp0,"N");
                    break;
                default:
                    printf(RED"Opção inválida:("RESET);
            }
       }while(strcmp(resp0,"S")==0||strcmp(resp0,"s")==0);
    }
    return 0;
}
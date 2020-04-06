export class SharedService {

    userInfoURL: string;
    siteURL: string;
    siteShortURL: string;
    signInURL: string;
    redirectionURL: string;
    baseURL: string;
    hostsURL: string;
    serviceCompURL: string;
    address: string;
    pagesize: number;
    apiTokenURL: string;



    constructor( ) {
        this.address = 'http://localhost:8443';
        this.baseURL = this.address + '/api/';
        this.userInfoURL = this.baseURL + 'user/me' ;
        this.siteURL = this.baseURL + 'sites';
        this.hostsURL = this.baseURL + 'sites/hosts/';
        this.siteShortURL = this.baseURL + 'sites/briefreport';
        this.signInURL = this.baseURL + 'auth/signin';
        this.redirectionURL = this.address + '/login';
        this.serviceCompURL = this.baseURL + 'serviceComponent/all/historic/';
        this.apiTokenURL  = this.baseURL + 'auth/api-token'
        this.pagesize = 50;
    }



}
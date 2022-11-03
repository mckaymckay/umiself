export interface T_Loyout {
    location: any;
    history: any;
}

export type T_Route_Meta = {
    title: string;
    isMenu?: boolean;
};
export interface T_Route {
    path: string;
    component?: string;
    mate?: T_Route_Meta;
    routes?: T_Route[];
    redirect?: string;
    exact?: boolean;
    fullPath?: string;
}

export interface T_Menu extends T_Route {
    fullPath: string;
    routes?: T_Menu[];
}

export interface T_GlobalInfo extends T_Route { }

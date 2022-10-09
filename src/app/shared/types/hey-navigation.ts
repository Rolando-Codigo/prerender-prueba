export interface HeyNavigationItem {
    title: string;
    type: 'item' | 'group' | 'collapsable';
    descripction?: string;
    hidden?: boolean;
    url?: string;
    classes?: string;
    externalUrl?: boolean;
    openInNewTab?: boolean;
    function?: any;
    children?: HeyNavigationItem[];
    isNew?: boolean;
}

export interface HeyNavigation extends HeyNavigationItem {
    children?: HeyNavigationItem[];
}

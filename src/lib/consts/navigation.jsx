import {DocumentArrowDownIcon, NewspaperIcon, UsersIcon, CurrencyDollarIcon, ChatBubbleBottomCenterIcon, Cog6ToothIcon } from "@heroicons/react/24/solid"
export const DASHBOARD_SIDERBAR_LINKS = [
    {
        key:'dashboard',
        label:'Dashboard',
        path: '/',
        icon : <DocumentArrowDownIcon className="size-6" />

    },
    {
        key:'new',
        label:'Whats New',
        path: '/new',
        icon : <NewspaperIcon className="size-6" />
    },
    {
        key:'users',
        label:'Users',
        path: '/users',
        icon : <UsersIcon className="size-6" />
    },
    {
        key:'revenue',
        label:'Revenue',
        path: '/revenue',
        icon : <CurrencyDollarIcon className="size-6" />
    }
]

export const DASHBOARD_SIDERBAR_BOTTOM_LINKS = [
    {
        key:'support',
        label:'Support',
        path: '/support',
        icon : <ChatBubbleBottomCenterIcon className="size-6" />

    },
    {
        key:'setting',
        label:'Setting',
        path: '/setting',
        icon : <Cog6ToothIcon className="size-6" />
    }
]
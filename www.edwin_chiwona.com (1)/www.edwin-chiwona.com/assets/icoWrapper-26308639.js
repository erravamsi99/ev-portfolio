import {
    s as e,
    j as p
} from "./index-4a6b1939.js";
const n = ({
        viewBox: s,
        compStyle: o,
        children: l,
        gradient: r
    }) => {
        const t = {};
        return r && (t.fill = `url(#${r})`), p.jsx(c, {
            xmlns: "http://www.w3.org/2000/svg",
            compStyle: o,
            viewBox: s,
            ...t,
            children: l
        })
    },
    c = e.svg `
    display: block;
    width: 100%;
    height: 100%;

    ${({theme:s})=>{var o;return`
fill: $ {
    (o = s.colors) == null ? void 0 : o.textColor
};
`}}
    ${({compStyle:s})=>`
$ {
    s ? ? ""
};
`};
`;
export {
    n as I
};
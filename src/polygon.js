import * as React from "react";
import { GeoJSON} from 'react-leaflet';

export const Polygon = (props) => {

    let color;

    if (props.status === "Viviendo")
        switch (props.suscribed) {
            case true:
                color = 'green';
                break;
            case false:
                color = 'red';
                break;
            default:
                color = 'white';
        }
    else if (props.status === "En_construcción")
        switch (props.suscribed) {
            case true:
                color = 'yellowGreen';
                break;
            case false:
                color = 'grey';
                break;
            default:
                color = 'white';
        }
    else if (props.status === "Consultar/En_trámite")
        color = 'yellow';
    else if (props.status === "Consultar/En_trámite")
        color = 'black';

    return (
        <GeoJSON
        data={JSON.parse(props.polygon)}
        color={color}
        />
    );
};

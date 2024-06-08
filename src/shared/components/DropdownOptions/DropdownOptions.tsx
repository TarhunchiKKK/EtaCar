import { memo } from 'react';

interface IDropdownOptionsProps {
    getOptions: () => JSX.Element[];
}

export const DropdownOptions = memo(function (props: IDropdownOptionsProps) {
    return <>{props.getOptions()}</>;
});

import React from "react";
import { FormikErrors } from "formik";
import { Label} from "office-ui-fabric-react";


import {
  TagPicker,
  IBasePicker,
  ITag,
  ValidationState
} from "office-ui-fabric-react/lib/Pickers";
import { mergeStyles } from "office-ui-fabric-react/lib/Styling";

const rootClass = mergeStyles({
  maxWidth: 500
});

//let selected: ITag[] = [];

export interface ITagPickerDemoPageState {
  isPickerDisabled?: boolean;
  inputValue: string;
}

interface IProps {
  label: string;
  name: string;
  error?: string | FormikErrors<any>;
  value: ITag[];
  onChange: (p: { target: { name: string; value: ITag[]; } }) => void
}

export class Picker extends React.Component<IProps, ITagPickerDemoPageState> {
  // All pickers extend from BasePicker specifying the item type.
  private _picker = React.createRef<IBasePicker<ITag>>();

  constructor(props: IProps) {
    super(props);
    this.state = {
      isPickerDisabled: false,
      inputValue: '',
    };
  }

  private addNewValue(value: string): void {
    const target = {
      name: this.props.name,
      value: [
        ...(this.props.value || []),
        { key: value, name: value }
      ]
    }
    this.props.onChange({
      target
    });
   // selected.push({ key: value, name: value });
    // console.log(selected);
  }

  private removeValue(item: ITag): void {
  }

  private handleChangeValue(selectedItem: ITag[] | undefined): void {
    
  }

  private onValidateInput(input: string): ValidationState {
    return ValidationState.valid;
  }
  onInputChange(input: string): string {
    if (input.charCodeAt(input.length - 1) === 32) return "";
    return input;
  }
  public render() {
    const { label, name, error, value } = this.props;
    return (
      <div className={rootClass}>
       <React.Fragment>
    <Label>{label}</Label>

  </React.Fragment>

        <TagPicker
          selectedItems={value}
          onRemoveSuggestion={this.removeValue}
          onChange={this.handleChangeValue}
          onResolveSuggestions={this._onFilterChanged}
          onValidateInput={this.onValidateInput}
          onInputChange={this.onInputChange}
          inputProps={{
            onKeyDown: (ev: React.KeyboardEvent<HTMLInputElement>) => {
              let newItem: string;
              if (ev.keyCode === 32) {
                newItem = (ev.target as HTMLInputElement).value;
                if (newItem !== "") this.addNewValue(newItem);
              }
            }
          }}
        />
        <span className="custom-error" data-automation-id="error-message">{error}</span>
      </div>
    );
  }

  private _onFilterChanged = (
    filterText: string,
    tagList: ITag[] | undefined
  ): ITag[] => {
    // console.log("filtertext", filterText, "tag", tagList);
    return []; //filterText
    //   ? _testTags
    //       .filter(
    //         tag =>
    //           tag.name.toLowerCase().indexOf(filterText.toLowerCase()) === 0
    //       )
    //       .filter(tag => !this._listContainsDocument(tag, tagList))
    //   : [];
  };

  //   private _listContainsDocument(tag: ITag, tagList?: ITag[]) {
  //     if (!tagList || !tagList.length || tagList.length === 0) {
  //       return false;
  //     }
  //     return tagList.filter(compareTag => compareTag.key === tag.key).length > 0;
  //   }
}

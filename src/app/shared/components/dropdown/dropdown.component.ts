import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IconComponent } from '../icon/icon.component';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule, IconComponent],
})
export class DropdownComponent implements OnInit {
  @Input() public options: string[] = [];
  @Input() public label?: string = '';
  @Input() public selectedOption: string = '';
  @Input() public placeholder: string = '';
  @Input() public icon: string = '';
  @Output() public selectionChange = new EventEmitter<string>();

  public selectElement: HTMLElement | null = null;

  ngOnInit(): void {
    const selectElement = document.querySelector(
      '.dropdown__select'
    ) as HTMLElement;
    this.selectElement = selectElement;
  }

  public onOptionSelected(option: any) {
    this.selectedOption = option.target.value;
    this.selectionChange.emit(this.selectedOption);
  }

  public onFocus() {
    if (this.selectElement) {
      this.selectElement.style.backgroundColor = '#2a2a2a';
    }
  }

  public onBlur() {
    if (this.selectElement) {
      this.selectElement.style.backgroundColor = '';
    }
  }
}

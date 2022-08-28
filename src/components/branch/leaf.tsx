import get from 'lodash/get';
import { JSX } from 'preact';
import { useState } from 'preact/hooks';
import { LeafNode, Props } from '../app';
import { EditorApp } from '../types';
import { moveNodeDown } from './lib/move-node-down';
import { moveNodeUp } from './lib/move-node-up';
import { removeNode } from './lib/remove-node';
import { RowHeader } from './row-header';

export function Leaf({ path, setState, state }: Props): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);
  const toggleIsOpen = () => setIsOpen(!isOpen);
  const leaf: EditorApp.LeafNode = get(state, path);
  const { value, label } = leaf;

  return (
    <li>
      <RowHeader
        addChild={false}
        isOpen={isOpen}
        label={label}
        onMoveNodeDown={() => moveNodeDown(setState, path)}
        onMoveNodeUp={() => moveNodeUp(setState, path)}
        onRemoveNode={() => removeNode(setState, path)}
        path={path}
        toggleIsOpen={toggleIsOpen}
      />
      {isOpen && (
        <div contentEditable className="field textarea">
          {value}
        </div>
      )}
    </li>
  );
}

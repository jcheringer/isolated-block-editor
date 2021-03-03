"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getBlocks = getBlocks;
exports.getEditorSelectionStart = getEditorSelectionStart;
exports.getEditorSelectionEnd = getEditorSelectionEnd;
exports.hasEditorUndo = hasEditorUndo;
exports.hasEditorRedo = hasEditorRedo;

var _selectors = require("../editor/selectors");

/**
 * Get blocks from edit history
 * @param {object} state - Current state
 * @returns {object[]}
 */
function getBlocks(state) {
  return state.blocks.present.blocks;
}
/**
 * Get end position
 * @param {object} state - Current state
 * @returns {object}
 */


function getEditorSelectionStart(state) {
  return state.blocks.present.selectionStart;
}
/**
 * Get end position
 * @param {object} state - Current state
 * @returns {object}
 */


function getEditorSelectionEnd(state) {
  return state.blocks.present.selectionEnd;
}
/**
 * Is undo possible?
 * @param {object} state - Current state
 * @returns {boolean}
 */


function hasEditorUndo(state) {
  return state.blocks.past.length > 0 && (0, _selectors.getEditorMode)(state) === 'visual';
}
/**
 * Is redo possible?
 * @param {object} state - Current state
 * @returns {boolean}
 */


function hasEditorRedo(state) {
  return state.blocks.future.length > 0 && (0, _selectors.getEditorMode)(state) === 'visual';
}
//# sourceMappingURL=selectors.js.map
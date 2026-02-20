import React from 'react';
import { StyleSheet } from 'react-native';
import Markdown from 'react-native-markdown-display';

interface MarkdownMessageProps {
  content: string;
}

export const MarkdownMessage: React.FC<MarkdownMessageProps> = ({ content }) => {
  return (
    <Markdown style={markdownStyles}>
      {content}
    </Markdown>
  );
};

const markdownStyles = StyleSheet.create({
  // Corps de texte
  body: {
    color: '#111827',
    fontSize: 15,
    lineHeight: 22,
  },
  
  // ========== TITRES ==========
  heading1: {
    fontSize: 20,
    fontWeight: '700',
    color: '#8B5CF6',
    marginTop: 16,
    marginBottom: 8,
  },
  heading2: {
    fontSize: 18,
    fontWeight: '700',
    color: '#8B5CF6',
    marginTop: 14,
    marginBottom: 6,
  },
  heading3: {
    fontSize: 16,
    fontWeight: '600',
    color: '#6366F1',
    marginTop: 12,
    marginBottom: 4,
  },
  heading4: {
    fontSize: 15,
    fontWeight: '600',
    color: '#6366F1',
    marginTop: 10,
    marginBottom: 3,
  },
  
  // ========== FORMATAGE TEXTE ==========
  
  // **Gras** - Pour les concepts importants
  strong: {
    fontWeight: '700',
    color: '#1F2937',
  },
  
  // *Italique* - Pour les exemples
  em: {
    fontStyle: 'italic',
    color: '#4B5563',
  },
  
  // ~~Barré~~
  s: {
    textDecorationLine: 'line-through',
    color: '#9CA3AF',
  },
  
  // ========== CODE ==========
  
  // `code inline` - Formules, nombres
  code_inline: {
    backgroundColor: '#FEF3C7',
    color: '#D97706',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
    fontFamily: 'monospace',
    fontSize: 14,
    fontWeight: '600',
  },
  
  // Bloc de code
  code_block: {
    backgroundColor: '#1F2937',
    borderRadius: 8,
    padding: 12,
    marginVertical: 8,
  },
  fence: {
    backgroundColor: '#1F2937',
    borderRadius: 8,
    padding: 12,
    marginVertical: 8,
    color: '#10B981',
    fontFamily: 'monospace',
    fontSize: 13,
  },
  
  // ========== LISTES ==========
  
  bullet_list: {
    marginVertical: 8,
  },
  ordered_list: {
    marginVertical: 8,
  },
  list_item: {
    flexDirection: 'row',
    marginBottom: 6,
    paddingLeft: 8,
  },
  bullet_list_icon: {
    color: '#8B5CF6',
    fontSize: 18,
    marginRight: 8,
    fontWeight: '700',
  },
  ordered_list_icon: {
    color: '#8B5CF6',
    fontSize: 15,
    marginRight: 8,
    fontWeight: '700',
  },
  
  // ========== SÉPARATEUR ==========
  
  hr: {
    backgroundColor: '#E5E7EB',
    height: 1,
    marginVertical: 12,
  },
  
  // ========== PARAGRAPHE ==========
  
  paragraph: {
    marginBottom: 8,
    lineHeight: 22,
  },
  
  // ========== LIENS ==========
  
  link: {
    color: '#3B82F6',
    textDecorationLine: 'underline',
    fontWeight: '600',
  },
  
  // ========== CITATION ==========
  
  blockquote: {
    backgroundColor: '#EEF2FF',
    borderLeftWidth: 4,
    borderLeftColor: '#8B5CF6',
    paddingLeft: 12,
    paddingRight: 12,
    paddingVertical: 8,
    marginVertical: 8,
    borderRadius: 4,
  },
  
  // ========== TABLE ==========
  
  table: {
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 8,
    marginVertical: 8,
  },
  thead: {
    backgroundColor: '#F3F4F6',
  },
  tbody: {
    backgroundColor: '#FFFFFF',
  },
  th: {
    padding: 8,
    fontWeight: '700',
    borderBottomWidth: 2,
    borderBottomColor: '#8B5CF6',
  },
  tr: {
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  td: {
    padding: 8,
  },
  
  // ========== AUTRES ==========
  
  image: {
    borderRadius: 8,
    marginVertical: 8,
  },
  
  textgroup: {
    marginBottom: 4,
  },
});
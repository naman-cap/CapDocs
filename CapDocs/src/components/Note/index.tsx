import React from 'react';
import styles from './styles.module.css';

type NoteProps = {
  title?: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
};

export default function Note({ title = 'Note', icon, children }: NoteProps) {
  return (
    <div className={styles.note} role="note">
      <div className={styles.header}>
        <span className={styles.icon} aria-hidden="true">{icon ?? '📘'}</span>
        <span className={styles.title}>{title}:</span>
      </div>
      <div className={styles.content}>{children}</div>
    </div>
  );
}



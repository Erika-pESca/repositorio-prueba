import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

@Entity()
export class Historial {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  wiseChat_id: number;

  @Column()
  user_id: number;

  @Column({ type: 'text' })
  content_message: string;

  @Column()
  urgency_level: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  creation_date: Date;

  @Column()
  sentiment: string;
}






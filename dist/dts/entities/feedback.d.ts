import { FeedbackType } from './FeedbackType';
export declare class Feedback {
    isWorking: boolean;
    text: string;
    type: FeedbackType;
    clear(): void;
    setNone(text?: string): void;
    setInfo(text?: string): void;
    setError(text?: string): void;
    setSuccess(text?: string): void;
    isInfo(): boolean;
    isError(): boolean;
    isSuccess(): boolean;
    private setText(text?);
}

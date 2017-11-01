export class MeetingData {
    public m_startTime: string;
    public m_endTime: string;
    public m_phoneNumber: number;
    public m_location: string;
    public constructor() {
        this.m_startTime = 0;
        this.m_endTime = 0;
        this.m_phoneNumber = 5000;
        this.m_location = '';
    }
}
!function(_,R){if("object"==typeof exports&&"object"==typeof module)module.exports=R();else if("function"==typeof define&&define.amd)define([],R);else{var E=R();for(var N in E)("object"==typeof exports?exports:_)[N]=E[N]}}(self,(()=>(()=>{"use strict";var _={d:(R,E)=>{for(var N in E)_.o(E,N)&&!_.o(R,N)&&Object.defineProperty(R,N,{enumerable:!0,get:E[N]})},o:(_,R)=>Object.prototype.hasOwnProperty.call(_,R),r:_=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(_,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(_,"__esModule",{value:!0})}},R={};_.r(R),_.d(R,{ADVICE_DONTNEED:()=>hR,ADVICE_NOREUSE:()=>lR,ADVICE_NORMAL:()=>UR,ADVICE_RANDOM:()=>oR,ADVICE_SEQUENTIAL:()=>HR,ADVICE_WILLNEED:()=>aR,CLOCKID_MONOTONIC:()=>T,CLOCKID_PROCESS_CPUTIME_ID:()=>S,CLOCKID_REALTIME:()=>O,CLOCKID_THREAD_CPUTIME_ID:()=>e,Ciovec:()=>eR,Dirent:()=>PR,ERRNO_2BIG:()=>A,ERRNO_ACCES:()=>i,ERRNO_ADDRINUSE:()=>s,ERRNO_ADDRNOTAVAIL:()=>L,ERRNO_AFNOSUPPORT:()=>n,ERRNO_AGAIN:()=>D,ERRNO_ALREADY:()=>G,ERRNO_BADF:()=>C,ERRNO_BADMSG:()=>r,ERRNO_BUSY:()=>F,ERRNO_CANCELED:()=>P,ERRNO_CHILD:()=>U,ERRNO_CONNABORTED:()=>H,ERRNO_CONNREFUSED:()=>o,ERRNO_CONNRESET:()=>a,ERRNO_DEADLK:()=>h,ERRNO_DESTADDRREQ:()=>l,ERRNO_DOM:()=>c,ERRNO_DQUOT:()=>M,ERRNO_EXIST:()=>d,ERRNO_FAULT:()=>f,ERRNO_FBIG:()=>y,ERRNO_HOSTUNREACH:()=>g,ERRNO_IDRM:()=>b,ERRNO_ILSEQ:()=>Y,ERRNO_INPROGRESS:()=>B,ERRNO_INTR:()=>u,ERRNO_INVAL:()=>K,ERRNO_IO:()=>p,ERRNO_ISCONN:()=>V,ERRNO_ISDIR:()=>m,ERRNO_LOOP:()=>W,ERRNO_MFILE:()=>w,ERRNO_MLINK:()=>v,ERRNO_MSGSIZE:()=>X,ERRNO_MULTIHOP:()=>j,ERRNO_NAMETOOLONG:()=>x,ERRNO_NETDOWN:()=>Q,ERRNO_NETRESET:()=>Z,ERRNO_NETUNREACH:()=>k,ERRNO_NFILE:()=>z,ERRNO_NOBUFS:()=>q,ERRNO_NODEV:()=>J,ERRNO_NOENT:()=>$,ERRNO_NOEXEC:()=>__,ERRNO_NOLCK:()=>R_,ERRNO_NOLINK:()=>E_,ERRNO_NOMEM:()=>N_,ERRNO_NOMSG:()=>t_,ERRNO_NOPROTOOPT:()=>O_,ERRNO_NOSPC:()=>T_,ERRNO_NOSYS:()=>S_,ERRNO_NOTCAPABLE:()=>y_,ERRNO_NOTCONN:()=>e_,ERRNO_NOTDIR:()=>I_,ERRNO_NOTEMPTY:()=>A_,ERRNO_NOTRECOVERABLE:()=>i_,ERRNO_NOTSOCK:()=>s_,ERRNO_NOTSUP:()=>L_,ERRNO_NOTTY:()=>n_,ERRNO_NXIO:()=>D_,ERRNO_OVERFLOW:()=>G_,ERRNO_OWNERDEAD:()=>C_,ERRNO_PERM:()=>r_,ERRNO_PIPE:()=>F_,ERRNO_PROTO:()=>P_,ERRNO_PROTONOSUPPORT:()=>U_,ERRNO_PROTOTYPE:()=>H_,ERRNO_RANGE:()=>o_,ERRNO_ROFS:()=>a_,ERRNO_SPIPE:()=>h_,ERRNO_SRCH:()=>l_,ERRNO_STALE:()=>c_,ERRNO_SUCCESS:()=>I,ERRNO_TIMEDOUT:()=>M_,ERRNO_TXTBSY:()=>d_,ERRNO_XDEV:()=>f_,EVENTRWFLAGS_FD_READWRITE_HANGUP:()=>jR,EVENTTYPE_CLOCK:()=>wR,EVENTTYPE_FD_READ:()=>vR,EVENTTYPE_FD_WRITE:()=>XR,FDFLAGS_APPEND:()=>cR,FDFLAGS_DSYNC:()=>MR,FDFLAGS_NONBLOCK:()=>dR,FDFLAGS_RSYNC:()=>fR,FDFLAGS_SYNC:()=>yR,FD_STDERR:()=>t,FD_STDIN:()=>E,FD_STDOUT:()=>N,FILETYPE_BLOCK_DEVICE:()=>LR,FILETYPE_CHARACTER_DEVICE:()=>nR,FILETYPE_DIRECTORY:()=>DR,FILETYPE_REGULAR_FILE:()=>GR,FILETYPE_SOCKET_DGRAM:()=>CR,FILETYPE_SOCKET_STREAM:()=>rR,FILETYPE_SYMBOLIC_LINK:()=>FR,FILETYPE_UNKNOWN:()=>sR,FSTFLAGS_ATIM:()=>bR,FSTFLAGS_ATIM_NOW:()=>YR,FSTFLAGS_MTIM:()=>BR,FSTFLAGS_MTIM_NOW:()=>uR,Fdstat:()=>gR,Filestat:()=>WR,Iovec:()=>SR,OFLAGS_CREAT:()=>KR,OFLAGS_DIRECTORY:()=>pR,OFLAGS_EXCL:()=>VR,OFLAGS_TRUNC:()=>mR,PREOPENTYPE_DIR:()=>dE,Prestat:()=>yE,PrestatDir:()=>fE,RIFLAGS_RECV_PEEK:()=>aE,RIFLAGS_RECV_WAITALL:()=>hE,RIGHTS_FD_ADVISE:()=>V_,RIGHTS_FD_ALLOCATE:()=>m_,RIGHTS_FD_DATASYNC:()=>g_,RIGHTS_FD_FDSTAT_SET_FLAGS:()=>B_,RIGHTS_FD_FILESTAT_GET:()=>$_,RIGHTS_FD_FILESTAT_SET_SIZE:()=>_R,RIGHTS_FD_FILESTAT_SET_TIMES:()=>RR,RIGHTS_FD_READ:()=>b_,RIGHTS_FD_READDIR:()=>x_,RIGHTS_FD_SEEK:()=>Y_,RIGHTS_FD_SYNC:()=>u_,RIGHTS_FD_TELL:()=>K_,RIGHTS_FD_WRITE:()=>p_,RIGHTS_PATH_CREATE_DIRECTORY:()=>W_,RIGHTS_PATH_CREATE_FILE:()=>w_,RIGHTS_PATH_FILESTAT_GET:()=>z_,RIGHTS_PATH_FILESTAT_SET_SIZE:()=>q_,RIGHTS_PATH_FILESTAT_SET_TIMES:()=>J_,RIGHTS_PATH_LINK_SOURCE:()=>v_,RIGHTS_PATH_LINK_TARGET:()=>X_,RIGHTS_PATH_OPEN:()=>j_,RIGHTS_PATH_READLINK:()=>Q_,RIGHTS_PATH_REMOVE_DIRECTORY:()=>NR,RIGHTS_PATH_RENAME_SOURCE:()=>Z_,RIGHTS_PATH_RENAME_TARGET:()=>k_,RIGHTS_PATH_SYMLINK:()=>ER,RIGHTS_PATH_UNLINK_FILE:()=>tR,RIGHTS_POLL_FD_READWRITE:()=>OR,RIGHTS_SOCK_SHUTDOWN:()=>TR,ROFLAGS_RECV_DATA_TRUNCATED:()=>lE,SDFLAGS_RD:()=>cE,SDFLAGS_WR:()=>ME,SIGNAL_ABRT:()=>$R,SIGNAL_ALRM:()=>SE,SIGNAL_BUS:()=>_E,SIGNAL_CHLD:()=>IE,SIGNAL_CONT:()=>AE,SIGNAL_FPE:()=>RE,SIGNAL_HUP:()=>ZR,SIGNAL_ILL:()=>qR,SIGNAL_INT:()=>kR,SIGNAL_KILL:()=>EE,SIGNAL_NONE:()=>QR,SIGNAL_PIPE:()=>TE,SIGNAL_POLL:()=>UE,SIGNAL_PROF:()=>FE,SIGNAL_PWR:()=>HE,SIGNAL_QUIT:()=>zR,SIGNAL_SEGV:()=>tE,SIGNAL_STOP:()=>iE,SIGNAL_SYS:()=>oE,SIGNAL_TERM:()=>eE,SIGNAL_TRAP:()=>JR,SIGNAL_TSTP:()=>sE,SIGNAL_TTIN:()=>LE,SIGNAL_TTOU:()=>nE,SIGNAL_URG:()=>DE,SIGNAL_USR1:()=>NE,SIGNAL_USR2:()=>OE,SIGNAL_VTALRM:()=>rE,SIGNAL_WINCH:()=>PE,SIGNAL_XCPU:()=>GE,SIGNAL_XFSZ:()=>CE,SUBCLOCKFLAGS_SUBSCRIPTION_CLOCK_ABSTIME:()=>xR,WHENCE_CUR:()=>AR,WHENCE_END:()=>iR,WHENCE_SET:()=>IR});const E=0,N=1,t=2,O=0,T=1,S=2,e=3,I=0,A=1,i=2,s=3,L=4,n=5,D=6,G=7,C=8,r=9,F=10,P=11,U=12,H=13,o=14,a=15,h=16,l=17,c=18,M=19,d=20,f=21,y=22,g=23,b=24,Y=25,B=26,u=27,K=28,p=29,V=30,m=31,W=32,w=33,v=34,X=35,j=36,x=37,Q=38,Z=39,k=40,z=41,q=42,J=43,$=44,__=45,R_=46,E_=47,N_=48,t_=49,O_=50,T_=51,S_=52,e_=53,I_=54,A_=55,i_=56,s_=57,L_=58,n_=59,D_=60,G_=61,C_=62,r_=63,F_=64,P_=65,U_=66,H_=67,o_=68,a_=69,h_=70,l_=71,c_=72,M_=73,d_=74,f_=75,y_=76,g_=1,b_=2,Y_=4,B_=8,u_=16,K_=32,p_=64,V_=128,m_=256,W_=512,w_=1024,v_=2048,X_=4096,j_=8192,x_=16384,Q_=32768,Z_=65536,k_=1<<17,z_=1<<18,q_=1<<19,J_=1<<20,$_=1<<21,_R=1<<22,RR=1<<23,ER=1<<24,NR=1<<25,tR=1<<26,OR=1<<27,TR=1<<28;class SR{static read_bytes(_,R){let E=new SR;return E.buf=_.getUint32(R,!0),E.buf_len=_.getUint32(R+4,!0),E}static read_bytes_array(_,R,E){let N=[];for(let t=0;t<E;t++)N.push(SR.read_bytes(_,R+8*t));return N}}class eR{static read_bytes(_,R){let E=new eR;return E.buf=_.getUint32(R,!0),E.buf_len=_.getUint32(R+4,!0),E}static read_bytes_array(_,R,E){let N=[];for(let t=0;t<E;t++)N.push(eR.read_bytes(_,R+8*t));return N}}const IR=0,AR=1,iR=2,sR=0,LR=1,nR=2,DR=3,GR=4,CR=5,rR=6,FR=7;class PR{length(){return 24+this.dir_name.byteLength}write_bytes(_,R,E){_.setBigUint64(E,this.d_next,!0),_.setBigUint64(E+8,this.d_ino,!0),_.setUint32(E+16,this.dir_name.length,!0),_.setUint8(E+20,this.d_type),R.set(this.dir_name,E+24)}constructor(_,R,E){this.d_ino=1n;let N=new TextEncoder("utf-8").encode(R);this.d_next=_,this.d_namlen=N.byteLength,this.d_type=E,this.dir_name=N}}const UR=0,HR=1,oR=2,aR=3,hR=4,lR=5,cR=1,MR=2,dR=4,fR=8,yR=16;class gR{write_bytes(_,R){_.setUint8(R,this.fs_filetype),_.setUint16(R+2,this.fs_flags,!0),_.setBigUint64(R+8,this.fs_rights_base,!0),_.setBigUint64(R+16,this.fs_rights_inherited,!0)}constructor(_,R){this.fs_rights_base=0n,this.fs_rights_inherited=0n,this.fs_filetype=_,this.fs_flags=R}}const bR=1,YR=2,BR=4,uR=8,KR=1,pR=2,VR=4,mR=8;class WR{write_bytes(_,R){_.setBigUint64(R,this.dev,!0),_.setBigUint64(R+8,this.ino,!0),_.setUint8(R+16,this.filetype),_.setBigUint64(R+24,this.nlink,!0),_.setBigUint64(R+32,this.size,!0),_.setBigUint64(R+38,this.atim,!0),_.setBigUint64(R+46,this.mtim,!0),_.setBigUint64(R+52,this.ctim,!0)}constructor(_,R){this.dev=0n,this.ino=0n,this.nlink=0n,this.atim=0n,this.mtim=0n,this.ctim=0n,this.filetype=_,this.size=BigInt(R)}}const wR=0,vR=1,XR=2,jR=1,xR=1,QR=0,ZR=1,kR=2,zR=3,qR=4,JR=5,$R=6,_E=7,RE=8,EE=9,NE=10,tE=11,OE=12,TE=13,SE=14,eE=15,IE=16,AE=17,iE=18,sE=19,LE=20,nE=21,DE=22,GE=23,CE=24,rE=25,FE=26,PE=27,UE=28,HE=29,oE=30,aE=1,hE=2,lE=1,cE=1,ME=2,dE=0;class fE{write_bytes(_,R){_.setUint32(R,this.pr_name_len,!0)}constructor(_){this.pr_name_len=_}}class yE{static dir(_){let R=new yE;return R.tag=dE,R.inner=new fE(_),R}write_bytes(_,R){_.setUint32(R,this.tag,!0),this.inner.write_bytes(_,R+4)}}return R})()));
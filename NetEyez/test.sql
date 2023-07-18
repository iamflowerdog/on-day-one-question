
INSERT INTO settings_application_protocol_dpi (name, port_range, application_class_name, application_class_id, internal, type)
VALUES ('VMWARE', '902;903', 'RemoteAccess', 18, true, 0);

INSERT INTO settings_application_protocol_dpi (name, port_range, application_class_name, application_class_id, internal, type)
VALUES ('MINING', '8333;30303', 'Mining', 11, true, 0);

INSERT INTO settings_application_protocol_dpi (name, port_range, application_class_name, application_class_id, internal, type)
VALUES ('HTTP_PROXY', '8080;3128', 'Web', 4, true, 0);

INSERT INTO settings_application_protocol_dpi (name, port_range, application_class_name, application_class_id, internal, type)
VALUES ('AJP', '8009;8010', 'Web', 4, true, 0);

INSERT INTO settings_application_protocol_dpi (name, port_range, application_class_name, application_class_id, internal, type)
VALUES ('VIBER', '7985;7987;5242;5423;4244', 'VOIP', 6, true, 0);

-- BitTorrent
INSERT INTO settings_application_protocol_dpi (name, port_range, application_class_name, application_class_id, internal, type)
VALUES ('BITTORRENT', '6771;51413;53646', 'Download', 22, true, 0)
ON CONFLICT (name) DO NOTHING;

-- DHCP
INSERT INTO settings_application_protocol_dpi (name, port_range, application_class_name, application_class_id, internal, type)
VALUES ('DHCP', '67;68', 'Network', 3, true, 0)
ON CONFLICT (name) DO NOTHING;

-- VNC
INSERT INTO settings_application_protocol_dpi (name, port_range, application_class_name, application_class_id, internal, type)
VALUES ('VNC', '5900;5901;5800', 'RemoteAccess', 18, true, 0)
ON CONFLICT (name) DO NOTHING;

-- COAP
INSERT INTO settings_application_protocol_dpi (name, port_range, application_class_name, application_class_id, internal, type)
VALUES ('COAP', '5683;5684', 'RPC', 21, true, 0)
ON CONFLICT (name) DO NOTHING;

-- MDNS
INSERT INTO settings_application_protocol_dpi (name, port_range, application_class_name, application_class_id, internal, type)
VALUES ('MDNS', '5353;5354', 'Network', 3, true, 0)
ON CONFLICT (name) DO NOTHING;

-- CAPWAP
INSERT INTO settings_application_protocol_dpi (name, port_range, application_class_name, application_class_id, internal, type)
VALUES ('CAPWAP', '5246;5247', 'Network', 3, true, 0)
ON CONFLICT (name) DO NOTHING;

-- SIP
INSERT INTO settings_application_protocol_dpi (name, port_range, application_class_name, application_class_id, internal, type)
VALUES ('SIP', '5060;5061', 'VOIP', 6, true, 0)
ON CONFLICT (name) DO NOTHING;

-- TargusDataspeed
INSERT INTO settings_application_protocol_dpi (name, port_range, application_class_name, application_class_id, internal, type)
VALUES ('TARGUSDATASPEED', '5001;5201', 'Network', 3, true, 0)
ON CONFLICT (name) DO NOTHING;

-- IPsec
INSERT INTO settings_application_protocol_dpi (name, port_range, application_class_name, application_class_id, internal, type)
VALUES ('IPSEC', '500;4500', 'VPN', 19, true, 0)
ON CONFLICT (name) DO NOTHING;

-- SMTPS
INSERT INTO settings_application_protocol_dpi (name, port_range, application_class_name, application_class_id, internal, type)
VALUES ('SMTPS', '465;587', 'Email', 2, true, 0)
ON CONFLICT (name) DO NOTHING;

-- QUIC
INSERT INTO settings_application_protocol_dpi (name, port_range, application_class_name, application_class_id, internal, type)
VALUES ('QUIC', '443;80', 'Web', 4, true, 0)
ON CONFLICT (name) DO NOTHING;

-- LISP
INSERT INTO settings_application_protocol_dpi (name, port_range, application_class_name, application_class_id, internal, type)
VALUES ('LISP', '4342;4341', 'Cloud', 17, true, 0)
ON CONFLICT (name) DO NOTHING;

-- Whois-DAS
INSERT INTO settings_application_protocol_dpi (name, port_range, application_class_name, application_class_id, internal, type)
VALUES ('WHOIS-DAS', '43;4343', 'Network', 3, true, 0)
ON CONFLICT (name) DO NOTHING;



-- SOMEIP
INSERT INTO settings_application_protocol_dpi (name, port_range, application_class_name, application_class_id, internal, type)
VALUES ('SOMEIP', '30491;30501;30490', 'RPC', 21, true, 0)
ON CONFLICT (name) DO NOTHING;;

-- GTP
INSERT INTO settings_application_protocol_dpi (name, port_range, application_class_name, application_class_id, internal, type)
VALUES ('GTP', '2152;2123', 'Network', 3, true, 0)
ON CONFLICT (name) DO NOTHING;

-- MQTT
INSERT INTO settings_application_protocol_dpi (name, port_range, application_class_name, application_class_id, internal, type)
VALUES ('MQTT', '1883;8883', 'RPC', 21, true, 0)
ON CONFLICT (name) DO NOTHING;

-- Radius
INSERT INTO settings_application_protocol_dpi (name, port_range, application_class_name, application_class_id, internal, type)
VALUES ('RADIUS', '1812;1813', 'Network', 3, true, 0)
ON CONFLICT (name) DO NOTHING;

-- BGP
INSERT INTO settings_application_protocol_dpi (name, port_range, application_class_name, application_class_id, internal, type)
VALUES ('BGP', '179;2605', 'Network', 3, true, 0)
ON CONFLICT (name) DO NOTHING;

-- H323
INSERT INTO settings_application_protocol_dpi (name, port_range, application_class_name, application_class_id, internal, type)
VALUES ('H323', '1719;1720', 'VOIP', 6, true, 0)
ON CONFLICT (name) DO NOTHING;

-- SNMP
INSERT INTO settings_application_protocol_dpi (name, port_range, application_class_name, application_class_id, internal, type)
VALUES ('SNMP', '161;162', 'Network', 3, true, 0)
ON CONFLICT (name) DO NOTHING;

-- Citrix
INSERT INTO settings_application_protocol_dpi (name, port_range, application_class_name, application_class_id, internal, type)
VALUES ('CITRIX', '1494;2598', 'Network', 3, true, 0)
ON CONFLICT (name) DO NOTHING;

-- MsSQL-TDS
INSERT INTO settings_application_protocol_dpi (name, port_range, application_class_name, application_class_id, internal, type)
VALUES ('MSSQL-TDS', '1433;1434', 'Database', 26, true, 0)
ON CONFLICT (name) DO NOTHING;

-- NetBIOS
INSERT INTO settings_application_protocol_dpi (name, port_range, application_class_name, application_class_id, internal, type)
VALUES ('NETBIOS', '137;138;139', 'System', 5, true, 0)
ON CONFLICT (name) DO NOTHING;

-- CiscoVPN
INSERT INTO settings_application_protocol_dpi (name, port_range, application_class_name, application_class_id, internal, type)
VALUES ('CISCOVPN', '10000;8008;8009', 'VPN', 19, true, 0)
ON CONFLICT (name) DO NOTHING;

-- VHUA
INSERT INTO settings_application_protocol_dpi (name, port_range, application_class_name, application_class_id, internal, type)
VALUES ('VHUA', '58267', 'VOIP', 6, true, 0)
ON CONFLICT (name) DO NOTHING;

-- MongoDB
INSERT INTO settings_application_protocol_dpi (name, port_range, application_class_name, application_class_id, internal, type)
VALUES ('MONGODB', '27017', 'Database', 26, true, 0)
ON CONFLICT (name) DO NOTHING;

-- GenshinImpact
INSERT INTO settings_application_protocol_dpi (name, port_range, application_class_name, application_class_id, internal, type)
VALUES ('GENSHINIMPACT', '22102', 'Game', 7, true, 0)
ON CONFLICT (name) DO NOTHING;

-- AmongUs
INSERT INTO settings_application_protocol_dpi (name, port_range, application_class_name, application_class_id, internal, type)
VALUES ('AMONGUS', '22023', 'Game', 7, true, 0)
ON CONFLICT (name) DO NOTHING;

-- DNP3
INSERT INTO settings_application_protocol_dpi (name, port_range, application_class_name, application_class_id, internal, type)
VALUES ('DNP3', '20000', 'IoT-Scada', 25, true, 0)
ON CONFLICT (name) DO NOTHING;

-- Dropbox
INSERT INTO settings_application_protocol_dpi (name, port_range, application_class_name, application_class_id, internal, type)
VALUES ('DROPBOX', '17500', 'Cloud', 17, true, 0)
ON CONFLICT (name) DO NOTHING;

-- Memcached
INSERT INTO settings_application_protocol_dpi (name, port_range, application_class_name, application_class_id, internal, type)
VALUES ('MEMCACHED', '11211', 'Network', 3, true, 0)
ON CONFLICT (name) DO NOTHING;

-- NestLogSink
INSERT INTO settings_application_protocol_dpi (name, port_range, application_class_name, application_class_id, internal, type)
VALUES ('NESTLOGSINK', '11095', 'Cloud', 17, true, 0)
ON CONFLICT (name) DO NOTHING;

-- Zabbix
INSERT INTO settings_application_protocol_dpi (name, port_range, application_class_name, application_class_id, internal, type)
VALUES ('ZABBIX', '10050', 'Network', 3, true, 0)
ON CONFLICT (name) DO NOTHING;

-- UBNTAC2
INSERT INTO settings_application_protocol_dpi (name, port_range, application_class_name, application_class_id, internal, type)
VALUES ('UBNTAC2', '10001', 'Network', 3, true, 0)
ON CONFLICT (name) DO NOTHING;

-- Git
INSERT INTO settings_application_protocol_dpi (name, port_range, application_class_name, application_class_id, internal, type)
VALUES ('GIT', '9418', 'Collaborative', 23, true, 0)
ON CONFLICT (name) DO NOTHING;

-- CPHA
INSERT INTO settings_application_protocol_dpi (name, port_range, application_class_name, application_class_id,internal, type)
VALUES ('CPHA', '8116', 'Network', 3, true, 0)
ON CONFLICT (name) DO NOTHING;

-- CHECKMK
INSERT INTO settings_application_protocol_dpi (name, port_range, application_class_name, application_class_id, internal, type)
VALUES ('CHECKMK', '6556', 'DataTransfer', 24, true, 0)
ON CONFLICT (name) DO NOTHING;

-- Redis
INSERT INTO settings_application_protocol_dpi (name, port_range, application_class_name, application_class_id, internal, type)
VALUES ('REDIS', '6379', 'Database', 26, true, 0)
ON CONFLICT (name) DO NOTHING;

-- sFlow
INSERT INTO settings_application_protocol_dpi (name, port_range, application_class_name, application_class_id, internal, type)
VALUES ('SFLOW', '6343', 'Network', 3, true, 0)
ON CONFLICT (name) DO NOTHING;



-- RemoteScan
INSERT INTO settings_application_protocol_dpi (name, port_range, application_class_name, application_class_id, internal, type)
VALUES ('REMOTESCAN', '6078;6077', 'Network', 3, true, 0)
ON CONFLICT (name) DO NOTHING;

-- TeamViewer
INSERT INTO settings_application_protocol_dpi (name, port_range, application_class_name, application_class_id, internal, type)
VALUES ('TEAMVIEWER', '5938', 'RemoteAccess', 18, true, 0)
ON CONFLICT (name) DO NOTHING;

-- PostgreSQL
INSERT INTO settings_application_protocol_dpi (name, port_range, application_class_name, application_class_id, internal, type)
VALUES ('POSTGRESQL', '5432', 'Database', 26, true, 0)
ON CONFLICT (name) DO NOTHING;

-- LLMNR
INSERT INTO settings_application_protocol_dpi (name, port_range, application_class_name, application_class_id, internal, type)
VALUES ('LLMNR', '5355', 'Network', 3, true, 0)
ON CONFLICT (name) DO NOTHING;

-- Ayiya
INSERT INTO settings_application_protocol_dpi (name, port_range, application_class_name, application_class_id, internal, type)
VALUES ('AYIYA', '5072', 'Network', 3, true, 0)
ON CONFLICT (name) DO NOTHING;

-- IAX
INSERT INTO settings_application_protocol_dpi (name, port_range, application_class_name, application_class_id, internal, type)
VALUES ('IAX', '4569', 'VOIP', 6, true, 0)
ON CONFLICT (name) DO NOTHING;

-- Diameter
INSERT INTO settings_application_protocol_dpi (name, port_range, application_class_name, application_class_id, internal, type)
VALUES ('DIAMETER', '3868', 'Network', 3, true, 0)
ON CONFLICT (name) DO NOTHING;

-- WSD
INSERT INTO settings_application_protocol_dpi (name, port_range, application_class_name, application_class_id, internal, type)
VALUES ('WSD', '3702', 'Network', 3, true, 0)
ON CONFLICT (name) DO NOTHING;

-- RDP
INSERT INTO settings_application_protocol_dpi (name, port_range, application_class_name, application_class_id, internal, type)
VALUES ('RDP', '3389', 'RemoteAccess', 18, true, 0)
ON CONFLICT (name) DO NOTHING;

-- MySQL
INSERT INTO settings_application_protocol_dpi (name, port_range, application_class_name, application_class_id, internal, type)
VALUES ('MYSQL', '3306', 'Database', 26, true, 0)
ON CONFLICT (name) DO NOTHING;

-- SAP
INSERT INTO settings_application_protocol_dpi (name, port_range, application_class_name, application_class_id, internal, type)
VALUES ('SAP', '3201', 'Network', 3, true, 0)
ON CONFLICT (name) DO NOTHING;

-- Megaco
INSERT INTO settings_application_protocol_dpi (name, port_range, application_class_name, application_class_id, internal, type)
VALUES ('MEGACO', '2944', 'VOIP', 6, true, 0)
ON CONFLICT (name) DO NOTHING;

-- OSPF
INSERT INTO settings_application_protocol_dpi (name, port_range, application_class_name, application_class_id, internal, type)
VALUES ('OSPF', '2604', 'Network', 3, true, 0)
ON CONFLICT (name) DO NOTHING;

-- IEC60870
INSERT INTO settings_application_protocol_dpi (name, port_range, application_class_name, application_class_id, internal, type)
VALUES ('IEC60870', '2404', 'IoT-Scada', 25, true, 0)
ON CONFLICT (name) DO NOTHING;

-- NetFlow
INSERT INTO settings_application_protocol_dpi (name, port_range, application_class_name, application_class_id, internal, type)
VALUES ('NETFLOW', '2055', 'Network', 3, true, 0)
ON CONFLICT (name) DO NOTHING;

-- NFS
INSERT INTO settings_application_protocol_dpi (name, port_range, application_class_name, application_class_id, internal, type)
VALUES ('NFS', '2049', 'DataTransfer', 24, true, 0)
ON CONFLICT (name) DO NOTHING;

-- CiscoSkinny
INSERT INTO settings_application_protocol_dpi (name, port_range, application_class_name, application_class_id, internal, type)
VALUES ('CISCOSKINNY', '2000', 'VOIP', 6, true, 0)
ON CONFLICT (name) DO NOTHING;

-- RTMP
INSERT INTO settings_application_protocol_dpi (name, port_range, application_class_name, application_class_id, internal, type)
VALUES ('RTMP', '1935', 'Media', 16, true, 0)
ON CONFLICT (name) DO NOTHING;

-- Oracle
INSERT INTO settings_application_protocol_dpi (name, port_range, application_class_name, application_class_id, internal, type)
VALUES ('ORACLE', '1521', 'Database', 26, true, 0)
ON CONFLICT (name) DO NOTHING;

-- LotusNotes
INSERT INTO settings_application_protocol_dpi (name, port_range, application_class_name, application_class_id, internal, type)
VALUES ('LOTUSNOTES', '1352', 'Collaborative', 23, true, 0)
ON CONFLICT (name) DO NOTHING;

-- OpenVPN
INSERT INTO settings_application_protocol_dpi (name, port_range, application_class_name, application_class_id, internal, type)
VALUES ('OPENVPN', '1194', 'VPN', 19, true, 0)
ON CONFLICT (name) DO NOTHING;

-- Starcraft
INSERT INTO settings_application_protocol_dpi (name, port_range, application_class_name, application_class_id, internal, type)
VALUES ('STARCRAFT', '1119', 'Game', 7, true, 0)
ON CONFLICT (name) DO NOTHING;

-- SOCKS
INSERT INTO settings_application_protocol_dpi (name, port_range, application_class_name, application_class_id, internal, type)
VALUES ('SOCKS', '1080', 'Web', 4, true, 0)
ON CONFLICT (name) DO NOTHING;

-- POPS
INSERT INTO settings_application_protocol_dpi (name, port_range, application_class_name, application_class_id, internal, type)
VALUES ('POPS', '995', 'Email', 2, true, 0)
ON CONFLICT (name) DO NOTHING;

-- IMAPS
INSERT INTO settings_application_protocol_dpi (name, port_range, application_class_name, application_class_id, internal, type)
VALUES ('IMAPS', '993', 'Email', 2, true, 0)
ON CONFLICT (name) DO NOTHING;


-- RSYNC
INSERT INTO settings_application_protocol_dpi (name, port_range, application_class_name, application_class_id, internal, type)
VALUES ('RSYNC', '873', 'DataTransfer', 24, true, 0)
ON CONFLICT (name) DO NOTHING;

-- DoH_DoT
INSERT INTO settings_application_protocol_dpi (name, port_range, application_class_name, application_class_id, internal, type)
VALUES ('DOH_DOT', '853;784', 'Network', 3, true, 0)
ON CONFLICT (name) DO NOTHING;

-- TINC
INSERT INTO settings_application_protocol_dpi (name, port_range, application_class_name, application_class_id, internal, type)
VALUES ('TINC', '655', 'VPN', 19, true, 0)
ON CONFLICT (name) DO NOTHING;


-- RTSP
INSERT INTO settings_application_protocol_dpi (name, port_range, application_class_name, application_class_id, internal, type)
VALUES ('RTSP', '554', 'Media', 16, true, 0)
ON CONFLICT (name) DO NOTHING;

-- AFP
INSERT INTO settings_application_protocol_dpi (name, port_range, application_class_name, application_class_id, internal, type)
VALUES ('AFP', '548', 'DataTransfer', 24, true, 0)
ON CONFLICT (name) DO NOTHING;

-- Syslog
INSERT INTO settings_application_protocol_dpi (name, port_range, application_class_name, application_class_id, internal, type)
VALUES ('SYSLOG', '514', 'System', 5, true, 0)
ON CONFLICT (name) DO NOTHING;

-- Modbus
INSERT INTO settings_application_protocol_dpi (name, port_range, application_class_name, application_class_id, internal, type)
VALUES ('MODBUS', '502', 'IoT-Scada', 25, true, 0)
ON CONFLICT (name) DO NOTHING;


-- SMBv23
INSERT INTO settings_application_protocol_dpi (name, port_range, application_class_name, application_class_id, internal, type)
VALUES ('SMBV23', '445', 'System', 5, true, 0)
ON CONFLICT (name) DO NOTHING;

-- TLS
INSERT INTO settings_application_protocol_dpi (name, port_range, application_class_name, application_class_id, internal, type)
VALUES ('TLS', '443', 'Web', 4, true, 0)
ON CONFLICT (name) DO NOTHING;

-- LDAP
INSERT INTO settings_application_protocol_dpi (name, port_range, application_class_name, application_class_id, internal, type)
VALUES ('LDAP', '389', 'System', 5, true, 0)
ON CONFLICT (name) DO NOTHING;

-- Z39.50
INSERT INTO settings_application_protocol_dpi (name, port_range, application_class_name, application_class_id, internal, type)
VALUES ('Z39.50', '210', 'Network', 3, true, 0)
ON CONFLICT (name) DO NOTHING;

-- IRC
INSERT INTO settings_application_protocol_dpi (name, port_range, application_class_name, application_class_id, internal, type)
VALUES ('IRC', '194', 'Chat', 9, true, 0)
ON CONFLICT (name) DO NOTHING;

-- XDMCP
INSERT INTO settings_application_protocol_dpi (name, port_range, application_class_name, application_class_id, internal, type)
VALUES ('XDMCP', '177', 'RemoteAccess', 18, true, 0)
ON CONFLICT (name) DO NOTHING;

-- IMAP
INSERT INTO settings_application_protocol_dpi (name, port_range, application_class_name, application_class_id, internal, type)
VALUES ('IMAP', '143', 'Email', 2, true, 0)
ON CONFLICT (name) DO NOTHING;


-- DCE_RPC
INSERT INTO settings_application_protocol_dpi (name, port_range, application_class_name, application_class_id, internal, type)
VALUES ('DCE_RPC', '135', 'RPC', 21, true, 0)
ON CONFLICT (name) DO NOTHING;

-- NTP
INSERT INTO settings_application_protocol_dpi (name, port_range, application_class_name, application_class_id, internal, type)
VALUES ('NTP', '123', 'System', 5, true, 0)
ON CONFLICT (name) DO NOTHING;

-- POP3
INSERT INTO settings_application_protocol_dpi (name, port_range, application_class_name, application_class_id, internal, type)
VALUES ('POP3', '110', 'Email', 2, true, 0)
ON CONFLICT (name) DO NOTHING;

-- s7comm
INSERT INTO settings_application_protocol_dpi (name, port_range, application_class_name, application_class_id, internal, type)
VALUES ('S7COMM', '102', 'Network', 3, true, 0)
ON CONFLICT (name) DO NOTHING;

-- Kerberos
INSERT INTO settings_application_protocol_dpi (name, port_range, application_class_name, application_class_id, internal, type)
VALUES ('KERBEROS', '88', 'Network', 3, true, 0)
ON CONFLICT (name) DO NOTHING;

-- HTTP
INSERT INTO settings_application_protocol_dpi (name, port_range, application_class_name, application_class_id, internal, type)
VALUES ('HTTP', '80', 'Web', 4, true, 0)
ON CONFLICT (name) DO NOTHING;

-- DNS
INSERT INTO settings_application_protocol_dpi (name, port_range, application_class_name, application_class_id, internal, type)
VALUES ('DNS', '53', 'Network', 3, true, 0)
ON CONFLICT (name) DO NOTHING;

-- SMTP
INSERT INTO settings_application_protocol_dpi (name, port_range, application_class_name, application_class_id, internal, type)
VALUES ('SMTP', '25', 'Email', 2, true, 0)
ON CONFLICT (name) DO NOTHING;

-- Telnet
INSERT INTO settings_application_protocol_dpi (name, port_range, application_class_name, application_class_id, internal, type)
VALUES ('TELNET', '23', 'RemoteAccess', 18, true, 0)
ON CONFLICT (name) DO NOTHING;

-- SSH
INSERT INTO settings_application_protocol_dpi (name, port_range, application_class_name, application_class_id, internal, type)
VALUES ('SSH', '22', 'RemoteAccess', 18, true, 0)
ON CONFLICT (name) DO NOTHING;

-- FTP_CONTROL
INSERT INTO settings_application_protocol_dpi (name, port_range, application_class_name, application_class_id, internal, type)
VALUES ('FTP_CONTROL', '21', 'Download', 22, true, 0)
ON CONFLICT (name) DO NOTHING;

-- FTP_DATA
INSERT INTO settings_application_protocol_dpi (name, port_range, application_class_name, application_class_id, internal, type)
VALUES ('FTP_DATA', '20', 'Download', 22, true, 0)
ON CONFLICT (name) DO NOTHING;